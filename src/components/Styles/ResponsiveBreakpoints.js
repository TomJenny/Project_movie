import { down, up } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

export const useBreakpoints = () => {
  const isXs = useBreakpoint(down("xs")); // down => '@media (max-width: 991.98px) { ... }'
  const isSm = useBreakpoint(down("sm"));
  const isMd = useBreakpoint(down("md"));
  const isLg = useBreakpoint(down("lg"));
  const isXl = useBreakpoint(up("xl"));

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  };
};
