// import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { LANGUAGES } from "./constants";
import i18n from "@/i18n";

const Transition = {
  get supportedLanguages() {
    return LANGUAGES;
  },
  get currentLanguage() {
    return i18n.global.locale.value;
  },
  set currentLanguage(newLocale: string) {
    i18n.global.locale.value = newLocale;
  },
  get defaultLanguage() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  },
  /**
   * 判断是否支持该语言
   * @param locale
   * @returns
   */
  isLocalesSupported(locale: string) {
    return locale in Transition.supportedLanguages;
  },
  /**
   * 获取用户浏览器语言
   * @returns
   */
  getUserLanguage() {
    const locale = navigator.language || Transition.defaultLanguage;

    return {
      locale,
      localeWithoutRegionCode: locale.toLowerCase().split(/[_-]+/)[0],
    };
  },
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale") || "";
    if (Transition.isLocalesSupported(persistedLocale)) {
      return persistedLocale;
    }

    return null;
  },
  guessDefaultLocale() {
    const userPersistedLocale = Transition.getPersistedLocale();

    // 如果用户有设置过语言，就使用用户设置的语言
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Transition.getUserLanguage();
    // 如果用户浏览器的语言被支持，就使用用户浏览器的语言
    // 如果带国家地区的语言被支持，就直接返回带国家地区的语言
    if (Transition.isLocalesSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
    // 返回不带国家地区的语言
    if (
      Transition.isLocalesSupported(userPreferredLocale.localeWithoutRegionCode)
    ) {
      return userPreferredLocale.localeWithoutRegionCode;
    }

    //如果以上都不满足，就使用程序环境变量中的默认语言
    return Transition.defaultLanguage;
  },
  // 路由中间件 每次切换语言时 在URL中添加语言参数
  routeMiddleware(
    // to: RouteLocationNormalized,
    // from: RouteLocationNormalized,
    // next: NavigationGuardNext
    to: any,
    from: any,
    next: any
  ) {
    // 获取路由参数中的语言
    const paramLocale = to.params.locale as string;

    // 如果路由参数中没有语言，就使用默认语言
    if (!Transition.isLocalesSupported(paramLocale)) {
      const defaultLocale = Transition.guessDefaultLocale();
      return next(defaultLocale);
    }

    Transition.switchLanguage(paramLocale);

    return next();
  },
  i18nRoute(to: any) {
    return {
      ...to,
      params: { locale: Transition.currentLanguage },
      ...to.params,
    };
  },
  switchLanguage(newLocale: string) {
    Transition.currentLanguage = newLocale;
    document.documentElement.lang = newLocale;
    localStorage.setItem("user-locale", newLocale);
  },
};

export default Transition;
