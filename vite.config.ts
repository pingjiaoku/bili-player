import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import icons from "unplugin-icons/vite";
import dts from "vite-plugin-dts";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const localIconPath = "lib/assets";
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./lib"),
      },
    },
    plugins: [
      vue(),
      icons({
        compiler: "vue3",
        customCollections: {
          ["svg"]: FileSystemIconLoader(localIconPath, (svg) =>
            svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
          ),
        },
        scale: 1,
        autoInstall: true,
        defaultClass: "inline-block",
      }),
      createSvgIconsPlugin({
        iconDirs: [localIconPath],
        symbolId: "i-svg-[name]",
      }),
      Components({
        resolvers: [
          IconsResolver({
            customCollections: ["svg"],
            componentPrefix: "i",
          }),
        ],
      }),
      dts({ include: "./lib" }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, "lib/index.ts"),
        name: "bili-player",
        fileName: "bili-player",
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };
});
