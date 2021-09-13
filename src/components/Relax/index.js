import React from "react";
import { Typography, Box, Card, Grid } from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import { useCountUp } from "use-count-up";
import { RELAXS } from "../../configs/data";

const Item = ({ icon, label, value }) => {
  const IconComp = Icon[icon];
  const { value: progress } = useCountUp({
    isCounting: true,
    end: value,
    duration: 5,
  });

  return (
    <Box textAlign="center">
      <Typography variant="caption" display="block">
        {label}
      </Typography>
      <Box my={1}>
        <IconComp fontSize="large" color="primary"/>
      </Box>
      <Typography display="block" variant="button">
        {progress}+
      </Typography>
    </Box>
  );
};

export default function Relax() {
  return (
    <Card>
      <Box p={3}>
        <Box mb={2}>
          <Typography display="block" variant="button">
            Relax
          </Typography>
        </Box>
        <Box maxWidth={1000} margin="auto">
          <Grid container spacing={2}>
            {RELAXS.map((item) => (
              <Grid item xs={6} sm={4} md={4} lg={4} xl={4} key={item.id}>
                <Item icon={item.icon} label={item.name} value={item.value} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
