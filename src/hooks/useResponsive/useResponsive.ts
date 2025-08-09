import { type Breakpoint } from "@mui/material";
import useBreakpoint from "../useBreakpoint/useBreakpoint";

type UseResponsiveOptions<T> = Partial<Record<Breakpoint, T>>;

export default function useResponsive<T>(options: UseResponsiveOptions<T>) {
  const { up: xl } = useBreakpoint("xl");
  const { up: lg } = useBreakpoint("lg");
  const { up: md } = useBreakpoint("md");
  const { up: sm } = useBreakpoint("sm");
  if (xl && options.xl) return options.xl;
  if (lg && options.lg) return options.lg;
  if (md && options.md) return options.md;
  if (sm && options.sm) return options.sm;
  return options.xs;
}
