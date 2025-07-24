import LanguageIcon from "@mui/icons-material/Language";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
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
          onClick={() => handleSelectLanguage("bg")}
          selected={language.startsWith("bg")}
        >
          <ListItemIcon>
            <span className="fi fi-bg"></span>
          </ListItemIcon>
          <ListItemText>български</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("bs")}
          selected={language.startsWith("bs")}
        >
          <ListItemIcon>
            <span className="fi fi-ba"></span>
          </ListItemIcon>
          <ListItemText>Bosanski</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("cs")}
          selected={language.startsWith("cs")}
        >
          <ListItemIcon>
            <span className="fi fi-cz"></span>
          </ListItemIcon>
          <ListItemText>čeština</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("da")}
          selected={language.startsWith("da")}
        >
          <ListItemIcon>
            <span className="fi fi-dk"></span>
          </ListItemIcon>
          <ListItemText>Dansk</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("de")}
          selected={language.startsWith("de")}
        >
          <ListItemIcon>
            <span className="fi fi-de"></span>
          </ListItemIcon>
          <ListItemText>Deutsch</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("en")}
          selected={language.startsWith("en")}
        >
          <ListItemIcon>
            <span className="fi fi-gb"></span>
          </ListItemIcon>
          <ListItemText>English</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("eo")}
          selected={language.startsWith("eo")}
        >
          <ListItemIcon>
            <span className="fi fi-xx"></span>
          </ListItemIcon>
          <ListItemText>Esperanto</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("es")}
          selected={language.startsWith("es")}
        >
          <ListItemIcon>
            <span className="fi fi-es"></span>
          </ListItemIcon>
          <ListItemText>Español</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("et")}
          selected={language.startsWith("et")}
        >
          <ListItemIcon>
            <span className="fi fi-ee"></span>
          </ListItemIcon>
          <ListItemText>Eesti</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("fr")}
          selected={language.startsWith("fr")}
        >
          <ListItemIcon>
            <span className="fi fi-fr"></span>
          </ListItemIcon>
          <ListItemText>Français</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("gr")}
          selected={language.startsWith("gr")}
        >
          <ListItemIcon>
            <span className="fi fi-gr"></span>
          </ListItemIcon>
          <ListItemText>Eλληνικά</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("hr")}
          selected={language.startsWith("hr")}
        >
          <ListItemIcon>
            <span className="fi fi-hr"></span>
          </ListItemIcon>
          <ListItemText>Hrvatski</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("hu")}
          selected={language.startsWith("hu")}
        >
          <ListItemIcon>
            <span className="fi fi-hu"></span>
          </ListItemIcon>
          <ListItemText>Magyar</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("is")}
          selected={language.startsWith("is")}
        >
          <ListItemIcon>
            <span className="fi fi-is"></span>
          </ListItemIcon>
          <ListItemText>íslenska</ListItemText>
        </MenuItem>
        <MenuItem
          selected={language.startsWith("it")}
          onClick={() => handleSelectLanguage("it")}
        >
          <ListItemIcon>
            <span className="fi fi-it"></span>
          </ListItemIcon>
          <ListItemText>Italiano</ListItemText>
        </MenuItem>
        <MenuItem
          selected={language.startsWith("kl")}
          onClick={() => handleSelectLanguage("kl")}
        >
          <ListItemIcon>
            <span className="fi fi-gl"></span>
          </ListItemIcon>
          <ListItemText>Kalaallisut</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("lt")}
          selected={language.startsWith("lt")}
        >
          <ListItemIcon>
            <span className="fi fi-lt"></span>
          </ListItemIcon>
          <ListItemText>Lietuvių</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("lv")}
          selected={language.startsWith("lv")}
        >
          <ListItemIcon>
            <span className="fi fi-lv"></span>
          </ListItemIcon>
          <ListItemText>Latviešu</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("nl")}
          selected={language.startsWith("nl")}
        >
          <ListItemIcon>
            <span className="fi fi-nl"></span>
          </ListItemIcon>
          <ListItemText>Dutch</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("no")}
          selected={language.startsWith("no")}
        >
          <ListItemIcon>
            <span className="fi fi-no"></span>
          </ListItemIcon>
          <ListItemText>Norsk</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("pl")}
          selected={language.startsWith("pl")}
        >
          <ListItemIcon>
            <span className="fi fi-pl"></span>
          </ListItemIcon>
          <ListItemText>Polski</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("pt")}
          selected={language.startsWith("pt")}
        >
          <ListItemIcon>
            <span className="fi fi-pt"></span>
          </ListItemIcon>
          <ListItemText>Português</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("ro")}
          selected={language.startsWith("ro")}
        >
          <ListItemIcon>
            <span className="fi fi-ro"></span>
          </ListItemIcon>
          <ListItemText>Română</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sl")}
          selected={language.startsWith("sl")}
        >
          <ListItemIcon>
            <span className="fi fi-si"></span>
          </ListItemIcon>
          <ListItemText>Slovenščina</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sk")}
          selected={language.startsWith("sk")}
        >
          <ListItemIcon>
            <span className="fi fi-sk"></span>
          </ListItemIcon>
          <ListItemText>Slovenščina</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sq")}
          selected={language.startsWith("sq")}
        >
          <ListItemIcon>
            <span className="fi fi-al"></span>
          </ListItemIcon>
          <ListItemText>Shqipe</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sr")}
          selected={language.startsWith("sr")}
        >
          <ListItemIcon>
            <span className="fi fi-rs"></span>
          </ListItemIcon>
          <ListItemText>Cрпски</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("fi")}
          selected={language.startsWith("fi")}
        >
          <ListItemIcon>
            <span className="fi fi-fi"></span>
          </ListItemIcon>
          <ListItemText>Suomi</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectLanguage("sv")}
          selected={language.startsWith("sv")}
        >
          <ListItemIcon>
            <span className="fi fi-se"></span>
          </ListItemIcon>
          <ListItemText>Svensk</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
