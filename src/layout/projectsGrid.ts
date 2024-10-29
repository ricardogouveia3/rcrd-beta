/* eslint-disable react-hooks/rules-of-hooks */
import { useBreakpoint } from "@hooks/useBreakpoint";
import { Project } from "../types/Project.type";

export const getGridSettings = (projects: Project[]) => {
  const isAbove2xl = useBreakpoint("2xl").isAbove2xl;
  const isAboveLg = useBreakpoint("lg").isAboveLg;
  const isAboveMd = useBreakpoint("md").isAboveMd;

  if (isAbove2xl)
    return {
      gridCols: projects.length >= 12 ? "grid-cols-4" : "grid-cols-3",
      maxRendered: projects.length,
    };
  if (isAboveLg)
    return {
      gridCols: projects.length >= 9 ? "grid-cols-3" : "grid-cols-2",
      maxRendered: 9,
    };
  if (isAboveMd)
    return {
      gridCols: projects.length >= 6 ? "grid-cols-2" : "grid-cols-1",
      maxRendered: 6,
    };
  return { gridCols: "grid-cols-1", maxRendered: 3 };
};
