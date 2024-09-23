import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  title: "@sr_scope/vue-kanban",
  description: "@sr_scope/vue-kanban",
  base: "/sr-vue-kanban/",
  theme: defaultTheme({
    // logo: "/logo-light.svg",

    navbar: ["/", "/doc/demo", "/doc/documentation"],
    sidebar: {
      // "/doc/documentation": [
      //   {
      //     text: "Foo",
      //     prefix: "/foo/",
      //     link: "/foo/",
      //     children: [
      //       {
      //         text: "NPM",
      //         link: "https://www.npmjs.com/package/dgdg",
      //         children: [],
      //       },
      //       "bar.md",
      //       "/ray.md",
      //     ],
      //   },
      //   {
      //     text: "Bar",
      //     link: "#anchor1",
      //   },
      // ],
    },
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],

  bundler: viteBundler(),
});
