import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus from "uview-plus";
import "@/styles/index.scss";

//组件
import i18n from "@/language/index";

export function createApp() {
  const app = createSSRApp(App);

  app.use(uviewPlus);

  //翻译
  app.use(i18n);

  return {
    app,
  };
}
