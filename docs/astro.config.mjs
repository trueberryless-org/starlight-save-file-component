// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Starlight Download Link",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Start here",
          items: [{ slug: "getting-started" }, { slug: "properties" }],
        },
      ],
    }),
  ],
});
