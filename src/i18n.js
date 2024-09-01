import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locale/en.json'
import ruJSON from './locale/ru.json'
import uzJSON from './locale/uz.json'
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    ru: { ...ruJSON },
    uz: { ...uzJSON },
  },
  lng: "uz",
  fallbackLng: "uz",
});
export default i18n;