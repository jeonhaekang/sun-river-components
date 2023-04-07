import { GlobalCSS } from "@styles/GlobalCSS";
import type { PropsWithChildren } from "react";
import { createContext } from "react";

const SunRiverContext = createContext(null);

export const SunRiverProvider = ({ children }: PropsWithChildren) => {
  return (
    <SunRiverContext.Provider value={null}>
      <GlobalCSS />
      {children}
    </SunRiverContext.Provider>
  );
};
