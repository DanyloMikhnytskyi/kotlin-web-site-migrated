import "@rescui/typography/lib/font-jb-sans-auto.css";

import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";
hljs.registerLanguage("kotlin", kotlin);

import { HeaderSection } from "./header-section";
import { LatestFromKotlinSection } from "./latest-from-kotlin-section";
import { WhyKotlinSection } from "./why-kotlin-section";
import { UsageSection } from "./usage-section";
import { StartSection } from "./start-section";

import "../index/index.scss";
import "../../../css/grid.scss";

export function OverviewPage() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}
