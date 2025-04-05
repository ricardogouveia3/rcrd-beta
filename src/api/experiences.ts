import {Experience} from "../types/Experience.type.ts";

export const fetchExperiences = async (): Promise<Experience[]> => {
  const data = await import("@data/experience.json");
  return data.default;
};
