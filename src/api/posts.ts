import { DEVTO_API_MY_POSTS } from "../constants/constants";

export const blogAPI = {
  getData: async () => {
    return await fetch(DEVTO_API_MY_POSTS)
      .then((res) => res.json())
      .catch(() => {
        console.error("Unable to fetch posts data from Dev.to");
        return [];
      });
  },
};
