import useSWR from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export const useRequest = (path: string, name: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSWR(url);

  return { data, error };
};
