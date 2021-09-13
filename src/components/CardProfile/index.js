import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  Telegram,
  WhatsApp,
  LinkedIn,
  GetAppRounded,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    minWidth: 300,
    position: "relative",
    overflow: "visible",
  },
  subText: {
    fontSize: 12,
  },
  avatar: {
    width: 130,
    height: 130,
    border: `4px solid ${theme.palette.primary.light}`,
    margin: "auto",
  },
  icon: {
    margin: "0 4px",
    color: theme.palette.primary.main,
  },
  ribon: {
    width: "150px",
    height: "150px",
    overflow: "hidden",
    position: "absolute",
    top: -5,
    left: -5,
    "&::before": {
      position: "absolute",
      zIndex: -1,
      content: `''`,
      display: "block",
      border: `5px solid ${theme.palette.primary.main}`,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      top: 0,
      right: 12,
    },
    "&::after": {
      position: "absolute",
      zIndex: -1,
      content: `''`,
      display: "block",
      border: `5px solid ${theme.palette.primary.main}`,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      bottom: 12,
      left: 0,
    },
  },
  ribonText: {
    position: "absolute",
    display: "block",
    width: "225px",
    padding: "10px 0",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    right: -25,
    top: 30,
    transform: "rotate(-45deg)",
    ...theme.typography.button,
    lineHeight: 1.3
  },
}));

const IMAGE = "https://i.imgur.com/lXzaf0J.png";

export default function CardProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.ribon}>
        <span className={classes.ribonText}>
          Font-End
        </span>
      </div>
      <CardContent>
        <Avatar src={IMAGE} alt="" className={classes.avatar} />
        <Box mt={2}>
          <Typography variant="button">HO VAN HIEU</Typography>
        </Box>
        <Typography display="block" variant="caption" color="textSecondary">
          Developer
        </Typography>
        <Box mt={2}>
          <Facebook className={classes.icon} />
          <Twitter className={classes.icon} />
          <Pinterest className={classes.icon} />
          <Instagram className={classes.icon} />
          <Telegram className={classes.icon} />
          <WhatsApp className={classes.icon} />
          <LinkedIn className={classes.icon} />
        </Box>
      </CardContent>
      <Box p={5}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<GetAppRounded />}
        >
          Download Profile
        </Button>
      </Box>
    </Card>
  );
}
