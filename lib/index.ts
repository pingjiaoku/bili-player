export * from "./types";
import { App } from "vue";
import BiliPlayer from "./index.vue";
export { BiliPlayer };

export default {
  install: (app: App) => {
    app.component(BiliPlayer.name, BiliPlayer);
  },
};
