import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import FetchBackend from "i18next-fetch-backend";
import LocalStorageBackend from "i18next-localstorage-backend"; // primary use cache
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(ChainedBackend)
  .init({
    backend: {
      backends: [LocalStorageBackend, FetchBackend],
      backendsOptions: [
        {
          expirationTime: Number(import.meta.env.VITE_I18N_EXPIRATIONTIME),
        },
        {
          loadPath: "/halloween/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
  });

export default i18next;
