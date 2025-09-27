import ShareIcon from "@mui/icons-material/Share";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import qrcode from "qrcode";

export default function ShareThePage() {
  const { t } = useTranslation("");
  const [open, setOpen] = useState(false);
  const [image] = useQrcode(window.location.href);
  const [snackbar, setSnackbar] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(window.location.href ?? "").then(() => {
      setSnackbar(true);
    });
  };

  return (
    <>
      <Button
        startIcon={<ShareIcon />}
        title={t("Share")}
        onClick={() => setOpen(true)}
      >
        {t("Share")}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{t("Share this page")}</DialogTitle>
        <DialogContent>
          <img
            alt={t("QRCode to share this page location")}
            src={image}
            style={{ margin: "0 auto", display: "block" }}
          />
        </DialogContent>
        <DialogActions
          sx={{ flexDirection: "row-reverse", justifyContent: "flex-start" }}
        >
          <Button
            title={t("Copy")}
            onClick={handleCopy}
            disabled={!navigator.clipboard}
          >
            {t("Copy")}
          </Button>
          <Button title={t("Close")} onClick={() => setOpen(false)}>
            {t("Close")}
          </Button>
        </DialogActions>
        <Snackbar
          open={snackbar}
          autoHideDuration={3000}
          onClose={() => setSnackbar(false)}
        >
          <Alert
            onClose={() => setSnackbar(false)}
            severity="info"
            sx={{ width: "100%" }}
            slotProps={{ closeButton: { title: t("Close") } }}
          >
            {t("Copied to clipboard")}
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
}

function useQrcode(
  text: string,
  options?: qrcode.QRCodeToDataURLOptions
): [string, boolean, null | Error] {
  const [value, setValue] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setPending(true);
    qrcode
      .toDataURL(text, options)
      .then(setValue)
      .catch(setError)
      .finally(() => {
        setPending(false);
      });
  }, [text, options]);
  return [value, pending, error];
}
