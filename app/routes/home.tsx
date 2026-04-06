import type { Route } from "./+types/home";
import { OverviewPage } from "../components/page/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "" },
    { property: "og:url", content: "https://kotlinlang.org/" },
    {
      property: "og:image",
      content: "https://kotlinlang.org/assets/images/open-graph/general.png",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Kotlin Programming Language" },
    { name: "twitter:description", content: "" },
  ];
}

export default function Home() {
  return <OverviewPage />;
}
