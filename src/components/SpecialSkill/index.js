import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
import { useCountUp } from "use-count-up";
import { SPECIAL_SKILLS } from "../../configs/data";

const CircularProgressWithLabel = ({ value, label, ...props }) => {
  const { value: progress } = useCountUp({
    isCounting: true,
    end: value,
    duration: 5,
  });

  return (
    <Box
      position="relative"
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        variant="determinate"
        value={Number(progress)}
        size={60}
        {...props}
      />
      <Box
        top={20}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
      <Box mt={1}>
        <Typography variant="caption">{label}</Typography>
      </Box>
    </Box>
  );
};

export default function SpecialSkill() {
  return (
    <Card>
      <Box p={3}>
        <Box mb={2}>
          <Typography variant="button">Special Skill</Typography>
        </Box>
        <Box maxWidth={1000} margin="auto">
          <Grid container spacing={2}>
            {SPECIAL_SKILLS.map((item) => (
              <Grid item xs={6} sm={3} md={3} lg={3} xl={3} key={item.id}>
                <Fade bottom>
                  <Box textAlign="center">
                    <CircularProgressWithLabel
                      value={item.process}
                      label={item.name}
                      key={item.id}
                    />
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}
