// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";


const [pkgStarlightTypeDoc, pkgTypeDocSidebarGroup] = createStarlightTypeDocPlugin();

const typeDocConfig = {
  useCodeBlocks: true,
  disableSources: true,
  parametersFormat: "htmlTable",
  propertyMembersFormat: "htmlTable",
  plugin: [
    "typedoc-plugin-zod",
    "typedoc-plugin-frontmatter",
  ],
};

const sidebar = [
  { label: "Overview", link: "/" },
  pkgTypeDocSidebarGroup,
];

export default defineConfig({
  site: "https://openai.github.io",
  base: "template",
  integrations: [
    starlight({
      plugins: [
        pkgStarlightTypeDoc({
          sidebar: { label: "@template/core" },
          entryPoints: ["../packages/core/src/index.ts"],
          tsconfig: "../packages/core/tsconfig.json",
          typeDoc: typeDocConfig,
        }),
      ],
      title: "Template Docs",
      sidebar,
      expressiveCode: { themes: ["houston", "one-light"] },
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
