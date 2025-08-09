import {
  Stack,
  Typography,
  type StackProps,
  type TypographyProps,
} from "@mui/material";
import Countdown from "../../components/Countdown/Countdown";
import useResponsive from "../../hooks/useResponsive/useResponsive";

type MainContentProps = Pick<StackProps, "sx"> & {
  after: string;
  before: string;
  days: number;
};

export default function MainContent({
  after,
  before,
  days,
  ...rest
}: MainContentProps) {
  const variant = useResponsive<TypographyProps["variant"]>({
    xs: "h2",
    sm: "h1",
  });

  return (
    <Stack direction="column" alignItems="center" {...rest}>
      <Typography
        variant={variant}
        align="center"
        fontFamily="Manufacturing Consent"
        sx={{ textShadow: "0px 0px 8px rgba(1,0,0,1)" }}
      >
        {before}
      </Typography>
      <Countdown days={days} />
      <Typography
        variant={variant}
        align="center"
        fontFamily="Manufacturing Consent"
        sx={{
          textShadow: "0px 0px 8px rgba(1,0,0,1)",
        }}
      >
        {after}
      </Typography>
    </Stack>
  );
}
