import {SocialItem} from "../types/Social.type.ts";

export const fetchSocialItems = async (): Promise<SocialItem[]> => {
  const { default: socialItems } = await import("@data/social.json");
  // @ts-expect-error ???
  return socialItems;
};

