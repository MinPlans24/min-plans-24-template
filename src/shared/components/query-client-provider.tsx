"use client";
import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RQ_CONFIG } from "@shared/configs/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type QueryClientProviderWrapperProps = { children: React.ReactNode };

const { NODE_ENV } = process.env;

const isDevelopmentOrTestMode =
  NODE_ENV === "development" || NODE_ENV === "test";

export const QueryClientProviderWrapper = ({
  children,
}: QueryClientProviderWrapperProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: RQ_CONFIG })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDevelopmentOrTestMode && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
