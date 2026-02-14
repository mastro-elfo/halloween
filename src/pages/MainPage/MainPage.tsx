import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import ShareThePage from "../../components/ShareThePage/ShareThePage";
import MainBackground from "./MainBackground";
import MainContent from "./MainContent";

export default function MainPage() {
  const { t } = useTranslation();
  const [today, setToday] = useState(new Date());
  const [rotation, setRotation] = useState(0);

  const isHalloween = today.getMonth() === 9 && today.getDate() === 31;
  const isAprilFool = today.getMonth() === 3 && today.getDate() === 1;
  const isMorseDay = today.getMonth() === 3 && today.getDate() === 27;

  const days = toDays(today);

  useEffect(() => {
    const to = setTimeout(
      () => {
        setToday(new Date());
      },
      +new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        0,
        0,
        0,
        0,
      ) - +today,
    );
    return () => {
      clearTimeout(to);
    };
  }, [today]);

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      if (isAprilFool) {
        const cx = window.innerWidth;
        const cy = window.innerHeight;
        const mx = event.pageX;
        const my = event.pageY;
        const r = Math.abs(cx + cy - mx - my);
        setRotation(r);
      }
    };
    document.addEventListener("mousemove", callback);
    return () => {
      document.removeEventListener("mousemove", callback);
    };
  }, [isAprilFool]);

  return (
    <>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Box flex={1}>
            <LanguageSelector />
            <ShareThePage />
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
          zIndex: 1,
        }}
      >
        <MainContent
          days={days}
          after={
            isHalloween
              ? t("Happy Halloween")
              : t("days to next Halloween", {
                  count: days,
                  context: isMorseDay ? "morse" : "",
                })
          }
          before={t("before", {
            count: days,
            context: isMorseDay ? "morse" : "",
          })}
          sx={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform linear 0.1s",
          }}
        />
      </Container>
      <MainBackground />
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
      24,
  );
}
