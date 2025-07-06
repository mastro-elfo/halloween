import { Box, Stack, Typography, useTheme } from "@mui/material";

type CountdownProps = {
  days: number;
};

export default function Countdown({ days }: CountdownProps) {
  const theme = useTheme();
  const asString = String(days).padStart(3, "0");
  const hundreds = asString.at(0);
  const tens = asString.at(1);
  const units = asString.at(2);
  const fontSize = theme.typography.h2.fontSize;
  return (
    <Stack
      direction="row"
      spacing={1.5}
      p={1}
      borderRadius={theme.shape.borderRadius}
      sx={{
        fontSize,
        backgroundColor: theme.palette.primary.dark,
        backgroundImage:
          "linear-gradient(to top, #00000044, #ffffff00, #ffffff44)",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(to top, black, antiquewhite 5%, white 49%, black, white 51%, antiquewhite 95%, black)",
          height: "1.5em",
          width: "1em",
          borderRadius: ["8px", 0, 0, "8px"].join(" "),
          boxShadow: `#000000ff 0 0 4px inset, #000000ff 2px 0 4px inset`,
        }}
      >
        <Typography
          fontSize={fontSize}
          fontFamily="Manufacturing Consent"
          color="black"
          align="center"
        >
          {hundreds}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          height: "1.5em",
          width: "1em",
          background:
            "linear-gradient(to top, black, antiquewhite 5%, white 49%, black, white 51%, antiquewhite 95%, black)",
          boxShadow: `#000000ff 0 0 4px 1px inset`,
        }}
      >
        <Typography
          fontSize={fontSize}
          fontFamily="Manufacturing Consent"
          color="black"
          align="center"
        >
          {tens}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          background:
            "linear-gradient(to top, black, antiquewhite 5%, white 49%, black, white 51%, antiquewhite 95%, black)",
          height: "1.5em",
          width: "1em",
          borderRadius: [0, "8px", "8px", 0].join(" "),
          boxShadow: `#000000ff 0 0 4px inset, #000000ff -2px 0 4px inset`,
        }}
      >
        <Typography
          fontSize={fontSize}
          fontFamily="Manufacturing Consent"
          color="black"
          align="center"
        >
          {units}
        </Typography>
      </Box>
    </Stack>
  );
}
