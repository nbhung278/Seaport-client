"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ApolloProvider } from "@apollo/client";
import { graphqlAuthClient, graphqlClient } from "@/graphql/gql.setup";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ApolloProvider client={graphqlAuthClient}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ApolloProvider>
  );
}

export function ThemeAuthProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ApolloProvider client={graphqlAuthClient}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ApolloProvider>
  );
}
