import React from "react";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { AppContext } from "../../views";
import { NAV_IDS, NAV_ITEMS } from "../../configs/nav";
import Icon from "../Icon";
import Scrollspy from "react-scrollspy";

const useStyles = makeStyles((theme) => ({
  active: {
    "& button": {
      color: theme.palette.primary.main,
    }
  },
  root: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
}));

export default function NavBar() {
  const context = React.useContext(AppContext);

  const classes = useStyles();

  const handleToggleSetting = () => {
    context.setAppState({ ...context.appState, openDrawerSetting: true });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Scrollspy
        items={NAV_IDS}
        currentClassName={classes.active}
        className={classes.root}
      >
        {NAV_ITEMS.map((item) => (
          <li>
            <a key={item.id} href={`#${item.id}`}>
              <IconButton>
                <Icon source={item.icon} />
              </IconButton>
            </a>
          </li>
        ))}
      </Scrollspy>
      <Box>
        <IconButton onClick={() => window.location.reload(true)}>
          <Icon source="Cached" />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={handleToggleSetting}>
          <Icon source="SettingsOutlined" />
        </IconButton>
      </Box>
    </Box>
  );
}
