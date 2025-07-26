import { Stack, Typography, type StackProps } from "@mui/material";
import Countdown from "../../components/Countdown/Countdown";

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
  return (
    <Stack direction="column" alignItems="center" {...rest}>
      <Typography
        variant="h1"
        align="center"
        fontFamily="Manufacturing Consent"
        sx={{ textShadow: "0px 0px 8px rgba(1,0,0,1)" }}
      >
        {before}
      </Typography>
      <Countdown days={days} />
      <Typography
        variant="h1"
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
