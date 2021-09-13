import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import { SERVICES } from "../../configs/data";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    textAlign: "center",
  },
}));

export default function Service() {
  const classes = useStyles();
  return (
    <Card>
      <Fade bottom>
        <Box p={3}>
          <Box mb={2}>
            <Typography variant="button">Service</Typography>
          </Box>
          <Box maxWidth={1000} margin="auto">
            <Grid container spacing={2}>
              {SERVICES.map((item) => {
                const IconComponent = Icon[item.icon];
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
                    <Paper className={classes.item} key={item.id}>
                      <CardContent>
                        <Box>
                          <IconComponent color="primary" />
                        </Box>
                        <Box my={1}>
                          <Typography variant="button">{item.name}</Typography>
                        </Box>
                        <Typography>{item.description}</Typography>
                      </CardContent>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Card>
  );
}
