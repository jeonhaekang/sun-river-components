import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";
import { createContext } from "react";
import { GlobalCSS, theme } from "~/styles";

const SunRiverContext = createContext(null);

export const SunRiverProvider = ({ children }: PropsWithChildren) => {
  return (
    <SunRiverContext.Provider value={null}>
      <GlobalCSS />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SunRiverContext.Provider>
  );
};
