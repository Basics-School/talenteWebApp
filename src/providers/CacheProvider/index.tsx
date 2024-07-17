import React from "react";
import { Experimental_CssVarsProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";

const CacheProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <Experimental_CssVarsProvider defaultMode="system">
        {getInitColorSchemeScript({
          // These properties are normally set when importing from @mui/material,
          // but we have to set manually because we are importing from @mui/system.
          attribute: "data-mui-color-scheme",
          modeStorageKey: "mui-mode",
          colorSchemeStorageKey: "mui-color-scheme",
          // All options that you pass to CssVarsProvider you should also pass here.
          defaultMode: "system",
        })}
        {children}
      </Experimental_CssVarsProvider>
    </AppRouterCacheProvider>
  );
};

export default CacheProvider;
