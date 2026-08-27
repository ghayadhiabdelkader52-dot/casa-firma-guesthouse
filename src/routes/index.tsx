import { createFileRoute } from "@tanstack/react-router";
import { Site } from "@/components/casa/Site";

const title = "CASA FIRMA — Maison d’hôtes à Tazarka | Tunisie";
const description =
  "CASA FIRMA, maison d’hôtes à Tazarka en Tunisie. Découvrez nos villas et bungalows privés, piscines, jardin et espaces extérieurs, et contactez-nous pour organiser votre séjour.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Site />;
}
