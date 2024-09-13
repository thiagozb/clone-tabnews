import database from "infra/database.js";
import retry from "async-retry";

async function waitForAllServices() {
  const RETRIES = 100;
  const MAX_TIMEOUT = 60000;
  const SUCESS_STATUS_CODE = 200;

  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: RETRIES,
      maxTimeout: MAX_TIMEOUT,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (response.status !== SUCESS_STATUS_CODE) {
        throw Error();
      }
    }
  }
}

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

const orchestrator = { waitForAllServices, clearDatabase };

export default orchestrator;
