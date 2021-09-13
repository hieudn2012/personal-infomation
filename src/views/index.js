import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Home from "./Home";
import { COLORS, FONTS, getTheme } from "../configs/themes";
import { getLayoutCache } from "../utils/cache";

export const AppContext = React.createContext({});

const initialLayout = {
  theme: "light",
  openDrawerSetting: false,
  font: FONTS[0],
  color: COLORS[0],
  transparentPaper: false
};

export default function Main() {
  const layoutCache = getLayoutCache();
  const [appState, setAppState] = React.useState(
    layoutCache["color"] ? layoutCache : initialLayout
  );

  const Theme = createTheme(
    getTheme(appState.theme, appState.color, appState.font)
  );

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
