import DefaultLayout from "interface/DefaultLayout";
import { Banner } from "@primer/react";

export default function ConfirmeRegistarPage() {
  return (
    <DefaultLayout
      contentWidth="small"
      metadata={{
        title: "Confirme seu email",
      }}
    >
      <Banner
        variant="warning"
        title="Falta só uma etapa!"
        description="Abra o email enviado pelo TabReviews e clique no link de confirmação."
      />
    </DefaultLayout>
  );
}
