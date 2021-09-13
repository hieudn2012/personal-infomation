import React from "react";
import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { LIBRARYS } from "../../configs/data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    position: "relative",
    "&::before": {
      content: '""',
      height: 1,
      width: "100%",
      backgroundColor: theme.palette.divider,
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundImage: `linear-gradient(
        to right,
        transparent 25%, 
        ${theme.palette.divider} calc(25% + 2px),
        transparent calc(25% + 2px),
        transparent 50%, 
        ${theme.palette.divider} calc(50% + 2px),
        transparent calc(50% + 2px),
        transparent 75%, 
        ${theme.palette.divider} calc(75% + 2px),
        transparent calc(75% + 2px)
      )`,
    },
  },
  item: {
    padding: `${theme.spacing(2)}px 0`,
    textAlign: "center",
  },
}));

export default function Library() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Fade bottom>
        <Box mb={2}>
          <Typography variant="button">Library</Typography>
        </Box>
        <Box className={classes.container}>
          {LIBRARYS.map((item) => (
            <Box className={classes.item} key={item.id}>
              <Typography variant="button">{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Fade>
    </Card>
  );
}
