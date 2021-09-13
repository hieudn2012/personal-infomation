import React from "react";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import {
  HomeOutlined,
  SettingsOutlined,
  CachedOutlined,
} from "@material-ui/icons";
import { AppContext } from "../../views";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    width: "100vw",
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: theme.shadows[24],
    zIndex: 2,
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  const context = React.useContext(AppContext);

  const handleChange = (e, value) => {
    if (value === 1) {
      window.location.reload();
    }
    if (value === 2) {
      context.setAppState({ ...context.appState, openDrawerSetting: true });
    }
  };

  return (
    <BottomNavigation
      onChange={handleChange}
      showLabels
      classes={{ root: classes.root }}
    >
      <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
      <BottomNavigationAction label="Reload" icon={<CachedOutlined />} />
      <BottomNavigationAction label="Setting" icon={<SettingsOutlined />} />
    </BottomNavigation>
  );
}
