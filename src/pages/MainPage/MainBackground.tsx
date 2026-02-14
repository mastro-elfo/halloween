import { Portal, useTheme } from "@mui/material";
import { animated, config, useSpring } from "@react-spring/web";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import BackgroundBox from "../../components/BackgroundBox/BackgroundBox";

export default function MainBackground() {
  const theme = useTheme();
  const [width, setWidth] = useState(
    Math.min(
      window.innerWidth,
      window.innerHeight,
      theme.breakpoints.values.sm,
    ),
  );

  const [leftSpring, leftSpringApi] = useSpring(
    () => ({
      from: { x: -width, transform: "scaleX(1)", opacity: 0.25 },
      to: [
        { x: -width * 0.52, delay: 3000 },
        { x: -width, delay: 500 },
        { x: -width * 0.1, delay: 2000 },
        { x: window.screen.width, delay: 2000 },
        { transform: "scaleX(-1)" },
        { x: -width, delay: 2000 },
        { transform: "scaleX(1)" },
        { x: 0, delay: 2000 },
        { opacity: 0, delay: 500, pause: true },
      ],
      loop: true,
      config: {
        ...config.default,
        mass: 5,
        tension: 40,
      },
    }),
    [],
  );

  useEffect(() => {
    function callback() {
      if (import.meta.env.DEV) console.log("Start");
      leftSpringApi.resume();
    }
    window.addEventListener("click", callback);
    return () => {
      window.removeEventListener("click", callback);
    };
  }, [leftSpringApi]);

  useEffect(() => {
    const callback = debounce(() => {
      const newWidth = Math.min(
        window.innerWidth,
        window.innerHeight,
        theme.breakpoints.values.sm,
      );
      if (import.meta.env.DEV) console.log("Resize", newWidth);
      setWidth(newWidth);
    }, 128);
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [theme.breakpoints.values.sm]);

  return (
    <Portal>
      <BackgroundBox
        image="/halloween/undraw_halloween_left_pumpkin.svg?t=345"
        position="bottom left"
        size="sm"
        bottom={-2}
        opacity={1}
        zIndex={-1}
      />
      <animated.div
        style={{
          backgroundImage: "url(/halloween/undraw_halloween_ghost.svg)",
          backgroundPosition: "bottom left",
          backgroundSize: width,
          backgroundRepeat: "no-repeat",
          width: width,
          height: width,
          zIndex: -2,
          position: "fixed",
          bottom: 0,
          ...leftSpring,
        }}
      />
      <BackgroundBox
        image="/halloween/undraw_halloween_right_pumpkin.svg"
        position="bottom left"
        size="sm"
        bottom={-2}
        opacity={1}
        zIndex={-3}
      />
      <BackgroundBox
        image="/halloween/undraw_spooky-self_eqcy.svg"
        position="bottom right"
        size="sm"
        opacity={0.25}
        zIndex={-4}
      />
    </Portal>
  );
}
