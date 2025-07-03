import { Alert, AlertTitle, Box, LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FallbackPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Alert severity="info">
        <AlertTitle>{t("Loading")}</AlertTitle>
        <LinearProgress />
      </Alert>
    </Box>
  );
}
