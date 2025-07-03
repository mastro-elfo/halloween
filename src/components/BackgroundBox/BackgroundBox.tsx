import { Box, type Breakpoint, type Breakpoints } from "@mui/material";

type Double<T extends string | number | bigint | boolean | null | undefined> =
  `${T} ${T}`;

type BackgroundPosition =
  | "center"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

type BackgroundRepeat =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "no-repeat"
  | "space"
  | "round";

type BackgroundBoxProps = {
  bottom?: number;
  image: string;
  left?: number;
  opacity?: number;
  position?: BackgroundPosition;
  repeat?: BackgroundRepeat | Double<BackgroundRepeat>;
  right?: number;
  size?: Breakpoint | false | "cover";
  top?: number;
  transform?: string;
  zIndex?: number;
};

export default function BackgroundBox({
  bottom = 0,
  image,
  left = 0,
  opacity = 1,
  position,
  repeat = "no-repeat",
  right = 0,
  size,
  top = 0,
  transform,
  zIndex = -1,
}: BackgroundBoxProps) {
  return (
    <Box
      position="fixed"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      zIndex={zIndex}
      sx={(theme) => ({
        backgroundImage: `url(${image})`,
        backgroundRepeat: repeat,
        backgroundPosition: position,
        backgroundSize: {
          ...getBackgroundSize(size, theme.breakpoints.values),
        },
        opacity: opacity,
        transform: transform,
      })}
    />
  );
}

function getBackgroundSize(
  size: BackgroundBoxProps["size"],
  breakpointValues: Breakpoints["values"]
) {
  if (!size) {
    return {
      xs: "contain",
    };
  }
  if (size === "cover") {
    return {
      xs: "cover",
    };
  }
  return {
    xs: "contain",
    [size]: breakpointValues[size],
  };
}
