import techData from "../data/marquee.json";
import {TechItem} from "../types/Marquee.type.ts";

export async function getTech(): Promise<TechItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(techData as TechItem[]), 500);
  });
}
