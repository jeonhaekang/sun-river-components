import { ThemeProvider } from "@emotion/react";
import { GlobalCSS } from "@styles/GlobalCSS";
import { theme } from "@styles/theme";
import type { PropsWithChildren } from "react";
import { createContext } from "react";

const SunRiverContext = createContext(null);

export const SunRiverProvider = ({ children }: PropsWithChildren) => {
  return (
    <SunRiverContext.Provider value={null}>
      <GlobalCSS />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SunRiverContext.Provider>
  );
};
