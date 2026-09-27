// @ts-check
import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";

import markdocGrammar from "./grammars/markdoc.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Starlight Save File Component",
      logo: {
        light: "./src/assets/logo-light.png",
        dark: "./src/assets/logo-dark.png",
        replacesTitle: true,
      },
      social: [
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
