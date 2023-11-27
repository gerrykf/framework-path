import { createI18n } from "vue-i18n";
import zhCN from "./locales/zh-CN.json";
import enUS from "./locales/en-US.json";
// import messages from "@intlify/unplugin-vue-i18n/messages";
import numberFormats from "./rules/number";
// import datetimeFormats from "./rules/datetime";

const messages: any = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, //默认语言
  // locale: "en-US", //默认语言
  fallbackFormat: import.meta.env.VITE_DEFAULT_FALLBACK_LOCALE, //默认格式
  legacy: false, // you must set `false`, to use Composition API
  messages,
  globalInjection: true, //是否自动注入
  numberFormats,
  // datetimeFormats,
});
