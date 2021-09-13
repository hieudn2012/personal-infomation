import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@material-ui/core";
import { AppContext } from "../../views";
import { COLORS, FONTS } from "../../configs/themes";
import { setLayoutCache } from "../../utils/cache";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 4,
  },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "inline-block",
    margin: 8,
    cursor: "pointer",
  },
}));

const Color = (props) => {
  const classes = useStyles();

  return <Box className={classes.colorButton} {...props} />;
};

export default function SettingDrawer({ open }) {
  const classes = useStyles();
  const context = React.useContext(AppContext);

  const handleToggleTheme = (theme) => {
    context.setAppState({ ...context.appState, theme });
    setLayoutCache({ ...context.appState, theme });
  };

  const handleToggleColor = (color) => {
    context.setAppState({ ...context.appState, color });
    setLayoutCache({ ...context.appState, color });
  };

  const handleToggleFont = (font) => {
    context.setAppState({ ...context.appState, font });
    setLayoutCache({ ...context.appState, font });
  };

  const handleTogglePaper = (transparentPaper) => {
    context.setAppState({ ...context.appState, transparentPaper });
    setLayoutCache({ ...context.appState, transparentPaper });
  }

  const handleClose = () => {
    context.setAppState({ ...context.appState, openDrawerSetting: false });
    setLayoutCache({ ...context.appState, openDrawerSetting: false });
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box width={240} p={3}>
        <Typography variant="button" display="block">
          Color
        </Typography>
        <Box my={1}>
          {COLORS.map((color) => (
            <Color
              bgcolor={color}
              onClick={() => handleToggleColor(color)}
              key={color}
            />
          ))}
        </Box>
        <Typography variant="button" display="block">
          Theme
        </Typography>
        <Box my={1}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.button}
            onClick={() => handleToggleTheme("dark")}
          >
            Dark
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.button}
            onClick={() => handleToggleTheme("light")}
          >
            Light
          </Button>
        </Box>
        <Typography variant="button" display="block">
          Font
        </Typography>
        <Box my={1}>
          <FormControl fullWidth>
            <Select
              variant="outlined"
              margin="dense"
              value={context.appState.font}
              onChange={(e) => handleToggleFont(e.target.value)}
            >
              {FONTS.map((font, index) => (
                <MenuItem value={font} style={{ fontFamily: font }} key={index}>
                  {font.split(",")[0]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Typography variant="button" display="block">
          Paper
        </Typography>
        <Box my={1}>
          <FormControl fullWidth>
            <FormControlLabel
              onChange={(_e, value) => handleTogglePaper(value)}
              control={<Switch color="primary" />}
              label="Transparent"
            />
          </FormControl>
        </Box>
      </Box>
    </Drawer>
  );
}
