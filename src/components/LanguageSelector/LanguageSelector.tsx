import LanguageIcon from "@mui/icons-material/Language";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(
    null
  );
  const [loading, setLoading] = useState(false);

  const handleSelectLanguage = (lng: string | undefined) => {
    setLoading(true);
    setLanguageAnchor(null);
    changeLanguage(lng).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Button
        startIcon={<LanguageIcon />}
        title={t("Select language")}
        onClick={(event) => setLanguageAnchor(event.currentTarget)}
        loading={loading}
      >
        {t("Language")}
      </Button>
      <Menu
        anchorEl={languageAnchor}
        open={!!languageAnchor}
        onClose={() => setLanguageAnchor(null)}
      >
        <MenuItem
          onClick={() => handleSelectLanguage("bs")}
          selected={language.startsWith("bs")}
        >
          Bosanski
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("da")}
          selected={language.startsWith("da")}
        >
          Dansk
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("de")}
          selected={language.startsWith("de")}
        >
          Deutsch
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("en")}
          selected={language.startsWith("en")}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("eo")}
          selected={language.startsWith("eo")}
        >
          Esperanto
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("es")}
          selected={language.startsWith("es")}
        >
          Español
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("et")}
          selected={language.startsWith("et")}
        >
          Eesti
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("fi")}
          selected={language.startsWith("fi")}
        >
          Suomi
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("fr")}
          selected={language.startsWith("fr")}
        >
          Français
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("gr")}
          selected={language.startsWith("gr")}
        >
          Eλληνικά
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("hr")}
          selected={language.startsWith("hr")}
        >
          Hrvatski
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("hu")}
          selected={language.startsWith("hu")}
        >
          Magyar
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("is")}
          selected={language.startsWith("is")}
        >
          íslenska
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("it")}
          selected={language.startsWith("it")}
        >
          Italiano
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("lt")}
          selected={language.startsWith("lt")}
        >
          Lietuvių
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("lv")}
          selected={language.startsWith("lv")}
        >
          Latviešu
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("nl")}
          selected={language.startsWith("nl")}
        >
          Dutch
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("no")}
          selected={language.startsWith("no")}
        >
          Norsk
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("pl")}
          selected={language.startsWith("pl")}
        >
          Polski
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("pt")}
          selected={language.startsWith("pt")}
        >
          Português
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sl")}
          selected={language.startsWith("sl")}
        >
          Slovenščina
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sq")}
          selected={language.startsWith("sq")}
        >
          Shqipe
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sv")}
          selected={language.startsWith("sv")}
        >
          Svensk
        </MenuItem>
      </Menu>
    </>
  );
}
