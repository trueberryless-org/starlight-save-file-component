import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";

import markdocGrammar from "./grammars/markdoc.tmLanguage.json";

const site =
  (process.env.CONTEXT === "deploy-preview" ||
  process.env.CONTEXT === "branch-deploy"
    ? process.env.DEPLOY_PRIME_URL
    : process.env.URL) ?? "https://starlight-save-file-component.netlify.app";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "Starlight Save File Component",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: new URL("og.png", site).href,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Download links for your Starlight site.",
          },
        },
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/felixs.dev",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-save-file-component",
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [{ slug: "getting-started" }, { slug: "usage" }],
        },
      ],
      expressiveCode: { shiki: { langs: [markdocGrammar] } },
      plugins: [
        starlightLinksValidator(),
        starlightPluginsDocsComponents({
          pluginName: "starlight-save-file-component",
        }),
      ],
    }),
  ],
});
