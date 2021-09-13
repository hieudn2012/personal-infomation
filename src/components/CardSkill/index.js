import React from "react";
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useCountUp } from "use-count-up";
import { SKILLS } from "../../configs/data";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
}));

function LinearProgressWithLabel({ label, value, ...props }) {
  const { value: progress } = useCountUp({
    isCounting: true,
    end: value,
    duration: 5,
  });

  return (
    <React.Fragment>
      <Typography variant="caption" display="block">
        {label}
      </Typography>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={Number(progress)} {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default function CardSkill() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box textAlign="center" mb={1}>
          <Typography variant="button">Skill</Typography>
        </Box>
        {SKILLS.map((item) => (
          <LinearProgressWithLabel
            value={item.process}
            label={item.name}
            key={item.id}
          />
        ))}
      </CardContent>
    </Card>
  );
}
