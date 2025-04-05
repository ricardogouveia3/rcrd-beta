import { Experience } from "../types/Experience.type";
import { experiences } from "../data/Experience";

export const fetchExperiences = async (): Promise<Experience[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(experiences);
    }, 300);
  });
};
