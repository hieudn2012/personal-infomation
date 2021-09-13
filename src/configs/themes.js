const common = {
  typography: {
    fontFamily: `'Fira Code', monospace`,
    button: {
      fontWeight: 700,
    },
  },
};

const darkTheme = {
  ...common,
  palette: {
    type: "dark",
  },
};

const lightTheme = {
  ...common,
  palette: {
    type: "light",
  },
};

const getTheme = (theme, color, font, transparentPaper) => ({
  typography: {
    ...common.typography,
    fontFamily: font,
  },
  palette: {
    type: theme,
    primary: {
      main: color,
    },
  },
});

const COLORS = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000",
];

const FONTS = [
  `'Fira Code', monospace`,
  `'Source Code Pro', monospace`,
  `'Caveat', cursive`,
  `'Josefin Sans', sans-serif`,
  `'Dancing Script', cursive`,
  `'Montserrat Alternates', sans-serif`,
  `'Raleway', sans-serif`,
  `'Dancing Script', cursive`,
  `'Exo', sans-serif`,
  `'Athiti', sans-serif`
];

export { darkTheme, lightTheme, getTheme, COLORS, FONTS };
