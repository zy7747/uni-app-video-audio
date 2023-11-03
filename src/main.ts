import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import App from "./App.vue";
import uviewPlus from "uview-plus";
import "@/styles/index.scss";
import "@/permission";

//组件
import i18n from "@/language/index";

export function createApp() {
  const app = createSSRApp(App);

  app.use(uviewPlus);

  //翻译
  app.use(i18n);

  app.use(Pinia.createPinia());

  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  };
}
