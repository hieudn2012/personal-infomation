import {
  Box,
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import ProgressBar from "react-scroll-progress-bar";
import AboutMe from "../../components/AboutMe";
import SimpleBottomNavigation from "../../components/BottomNavigation";
import CardProfile from "../../components/CardProfile";
import CardSkill from "../../components/CardSkill";
import ContactMe from "../../components/ContactMe";
import Education from "../../components/Education";
import Library from "../../components/Library";
import NavBar from "../../components/NavBar";
import Relax from "../../components/Relax";
import Service from "../../components/Service";
import SpecialSkill from "../../components/SpecialSkill";
import WorkExperience from "../../components/WorkExperience";
import SettingDrawer from "../../components/SettingDrawer";
import { AppContext } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${theme.palette.background.default}cf`,
  },
  svgLeft: {
    top: 0,
    left: 0,
    position: "fixed",
    zIndex: -1,
    "& polygon": {
      fill: `${theme.palette.primary.main}52`,
    },
  },
  svgRight: {
    top: 0,
    right: 0,
    position: "fixed",
    zIndex: -1,
    "& polygon": {
      fill: `${theme.palette.primary.main}52`,
    },
  },
  processBar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Home() {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("lg"));

  const context = React.useContext(AppContext);

  return (
    <React.Fragment>
      <Box px={2} py={5} className={classes.root}>
        <Grid container spacing={2}>
          {isMd && (
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Box display="flex" justifyContent="flex-end">
                <Box position="fixed">
                  <CardProfile />
                  <Box height={20} />
                  <CardSkill />
                </Box>
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            {!isMd && (
              <React.Fragment>
                <CardProfile />
                <Box height={20} />
                <CardSkill />
                <Box height={20} />
              </React.Fragment>
            )}
            <section id="section1">
              <AboutMe />
            </section>
            <Box height={20} />
            <section id="section2">
              <Education />
            </section>
            <Box height={20} />
            <section id="section3">
              <Library />
            </section>
            <Box height={20} />
            <section id="section4">
              <WorkExperience />
            </section>
            <Box height={20} />
            <section id="section5">
              <Service />
            </section>
            <Box height={20} />
            <section id="section6">
              <SpecialSkill />
            </section>
            <Box height={20} />
            <section id="section7">
              <Relax />
            </section>
            <Box height={20} />
            <section id="section8">
              <ContactMe />
            </section>
            {!isMd && <Box height={30} />}
          </Grid>
          {isMd && (
            <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
              <Box display="flex" justifyContent="flex-start">
                <Box position="fixed">
                  <NavBar />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
        <svg height={519} width={758} className={classes.svgLeft}>
          <polygon points="0,455,693,352,173,0,92,0,0,71" />
        </svg>
        <svg height={536} width={633} className={classes.svgRight}>
          <polygon points="0,0,633,0,633,536" />
        </svg>
        {!isMd && <SimpleBottomNavigation />}
        <SettingDrawer open={context.appState.openDrawerSetting} />
      </Box>
      <ProgressBar bgcolor={theme.palette.primary.main} />
    </React.Fragment>
  );
}
