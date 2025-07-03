import { Language } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import Countdown from "../../components/Countdown/Countdown";

export default function MainPage() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [today, setToday] = useState(new Date());
  const isHalloween = today.getMonth() === 9 && today.getDate() === 31;
  const days = toDays(today);
  useEffect(() => {
    const to = setTimeout(() => {
      setToday(new Date());
    }, +new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0, 0) - +today);
    return () => {
      clearTimeout(to);
    };
  }, [today]);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(
    null
  );

  const handleSelectLanguage = (lng: string | undefined) => {
    changeLanguage(lng).finally(() => {
      setLanguageAnchor(null);
    });
  };

  return (
    <>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Button
            startIcon={<Language />}
            title={t("Select language")}
            onClick={(event) => setLanguageAnchor(event.currentTarget)}
          >
            {t("Language")}
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Stack direction="column" alignItems="center">
          {!isHalloween && (
            <Typography
              variant="h1"
              align="center"
              fontFamily="Manufacturing Consent"
              sx={{ textShadow: "0px 0px 8px rgba(1,0,0,1)" }}
            >
              {t("before")}
            </Typography>
          )}
          {!isHalloween && <Countdown days={days} />}
          <Typography
            variant="h1"
            align="center"
            fontFamily="Manufacturing Consent"
            sx={{ textShadow: "0px 0px 8px rgba(1,0,0,1)" }}
          >
            {isHalloween ? t("Happy Halloween") : t("days to next Halloween")}
          </Typography>
        </Stack>
      </Container>
      <BackgroundBox
        image="/undraw_halloween_q1b1.svg"
        position="bottom left"
        size="sm"
        opacity={0.25}
      />
      <Menu
        anchorEl={languageAnchor}
        open={!!languageAnchor}
        onClose={() => setLanguageAnchor(null)}
      >
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
          ελληνικά
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
          onClick={() => handleSelectLanguage("pt")}
          selected={language.startsWith("pt")}
        >
          Português
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

function toDays(today: Date) {
  const td = new Date(today);
  td.setHours(0, 0, 0, 0);
  if (td.getMonth() === 9 && td.getDate() === 31) return 0;
  return (
    (+new Date(td.getFullYear() + (td.getMonth() > 9 ? 1 : 0), 9, 31) - +td) /
    1000 /
    60 /
    60 /
    24
  );
}
