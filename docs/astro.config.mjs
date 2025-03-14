// @ts-check
import node from "@astrojs/node";
import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightPluginShowLatestVersion from "starlight-plugin-show-latest-version";

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
      social: {
        github:
          "https://github.com/trueberryless-org/starlight-save-file-component",
      },
      sidebar: [
        {
          label: "Start here",
          items: [{ slug: "getting-started" }, { slug: "usage" }],
        },
      ],
      plugins: [
        starlightPluginsDocsComponents({
          pluginName: "starlight-save-file-component",
        }),
        starlightPluginShowLatestVersion({
          source: {
            slug: "starlight-save-file-component",
          },
          showInSiteTitle: "deferred",
        }),
      ],
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
