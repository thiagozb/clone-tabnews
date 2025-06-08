import retry from "async-retry";
import { faker } from "@faker-js/faker";
import database from "infra/database.js";
import migrator from "models/migrator.js";
import user from "../models/user";

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

async function runPendingMigrations() {
  await migrator.runPendingMigrations();
}

async function createUser(userObject) {
  return await user.create({
    username:
      userObject?.username || faker.internet.username().replace(/[_.-]/g, ""),
    email: userObject?.email || faker.internet.email(),
    password: userObject?.password || faker.internet.password(),
  });
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
  createUser,
};

export default orchestrator;
