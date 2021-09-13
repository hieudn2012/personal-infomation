import React from "react";
import {
  Box,
  Card,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineOppositeContent,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import clsx from "clsx";
import Fade from "react-reveal/Fade";
import Icon from "../../components/Icon";
import { EDUCATIONS } from "../../configs/data";

const useStyles = makeStyles((theme) => ({
  leftItem: {
    width: 220,
    flex: "none",
  },
  timeRoot: {
    position: "relative",
    padding: theme.spacing(0.5),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    maxWidth: 250,
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      width: 0,
      height: 0,
      left: "100%",
      borderColor: theme.palette.primary.main,
      borderTop: `16px solid transparent!important`,
      borderBottom: `16px solid transparent`,
      borderLeft: `10px solid transparent`,
      borderRight: `10px solid transparent`,
    },
  },
  margin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
}));

export const Time = ({ children, isSm }) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.timeRoot, { [classes.margin]: isSm })}>
      <Typography color="inherit">{children}</Typography>
    </Box>
  );
};

export const SmallContent = ({ data, isSm }) => {
  return (
    <React.Fragment>
      <Time isSm={isSm}>{data.time}</Time>
      <Typography display="block" variant="h6">
        {data.title}
      </Typography>
      <Typography display="block">{data.content}</Typography>
    </React.Fragment>
  );
};

export const TimeLineCustom = ({
  data = [],
  title,
  icon = "SchoolOutlined",
}) => {
  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card>
      <Box p={4}>
        <Typography variant="button">{title}</Typography>
        {!isSm ? (
          <Timeline align="left">
            {data.map((item, index) => {
              return (
                <Fade bottom key={index}>
                  <TimelineItem key={item.id}>
                    <TimelineOppositeContent className={classes.leftItem}>
                      <Time isSm={isSm}>{item.time}</Time>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined">
                        <Icon source={icon} fontSize="small" color="primary" />
                      </TimelineDot>
                      {index < data.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Box px={3} mb={8}>
                        <Typography variant="h6" component="h1">
                          {item.title}
                        </Typography>
                        <Typography>{item.content}</Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Fade>
              );
            })}
          </Timeline>
        ) : (
          <React.Fragment>
            {data.map((item, index) => (
              <Fade bottom key={index}>
                <SmallContent isSm={isSm} data={item} />
              </Fade>
            ))}
          </React.Fragment>
        )}
      </Box>
    </Card>
  );
};

export default function Education() {
  return <TimeLineCustom data={EDUCATIONS} title="Education" />;
}
