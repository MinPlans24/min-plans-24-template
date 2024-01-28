import { DefaultOptions } from "@tanstack/react-query";

export const RQ_CONFIG: DefaultOptions = {
  queries: {
    suspense: false,
    enabled: true,
    retry: 0,
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnMount: true,
  },
  mutations: {},
};
