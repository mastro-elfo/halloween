import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";
import Countdown from "../../components/Countdown/Countdown";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

export default function MainPage() {
  const { t } = useTranslation();
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

  return (
    <>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Box flex={1}>
            <LanguageSelector />
          </Box>
          <Typography color="primary" variant="body2">
            {import.meta.env.VITE_VERSION}
          </Typography>
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
              {t("before", { count: days })}
            </Typography>
          )}
          {!isHalloween && <Countdown days={days} />}
          <Typography
            variant="h1"
            align="center"
            fontFamily="Manufacturing Consent"
            sx={{ textShadow: "0px 0px 8px rgba(1,0,0,1)" }}
          >
            {isHalloween
              ? t("Happy Halloween")
              : t("days to next Halloween", { count: days })}
          </Typography>
        </Stack>
      </Container>
      <BackgroundBox
        image="/undraw_halloween_q1b1.svg"
        position="bottom left"
        size="sm"
        opacity={0.25}
      />
      <BackgroundBox
        image="/undraw_spooky-self_eqcy.svg"
        position="bottom right"
        size="sm"
        opacity={0.25}
      />
    </>
  );
}

function toDays(today: Date) {
  const td = new Date(today);
  td.setHours(0, 0, 0, 0);
  if (td.getMonth() === 9 && td.getDate() === 31) return 0;
  return Math.floor(
    (+new Date(td.getFullYear() + (td.getMonth() > 9 ? 1 : 0), 9, 31) - +td) /
      1000 /
      60 /
      60 /
      24
  );
}
