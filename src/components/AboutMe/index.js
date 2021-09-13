import React from "react";
import Fade from "react-reveal/Fade";
import {
  Box,
  Button,
  Card,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  label: {
    width: 140,
  },
  signature: {
    width: 200,
    filter: theme.palette.type === "dark" ? "brightness(0) invert(1)" : "none",
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Card>
      <Fade bottom>
        <Box p={4}>
          <Typography display="block" variant="button">
            ABOUT ME
          </Typography>
          <Box mt={4} mb={2}>
            <Typography display="block" variant="subtitle2">
              Helo, I’m Ola Lowe!
            </Typography>
          </Box>
          <Typography display="block">
            I am talanted florist and decorator. I have graduated from
            International and cultural university of design and arts. Since
            first year in high school I relized that nature is most powerfull
            and beautiful gift in the world. I was captivated by beauty and
            simplicity of flowers and trees. Since then I have started to create
            and mastering unique and nice bouquets. My 1st masterpiece was
            garden of ant Ula Lowe decorated by me
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Button
                startIcon={<ShareIcon />}
                variant="outlined"
                color="primary"
                size="small"
              >
                SHARE
              </Button>
            </Box>
            <img
              src="https://imgur.com/wngiV5z.png"
              alt="signature"
              className={classes.signature}
            />
          </Box>
          <Box my={4}>
            <Divider />
          </Box>
          <Box>
            <Box mb={2}>
              <Typography display="block" variant="button">
                Infomation
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="button"
                component="div"
                className={classes.label}
              >
                Full Name
              </Typography>
              <Typography>Ola Maria Lowe</Typography>
            </Box>
            <Box display="flex">
              <Typography variant="button" className={classes.label}>
                Birthday
              </Typography>
              <Typography>05 Sep 1986</Typography>
            </Box>
            <Box display="flex">
              <Typography variant="button" className={classes.label}>
                Address
              </Typography>
              <Typography>24058, Belgium, Brussels, Liutte 27, BE</Typography>
            </Box>
            <Box display="flex">
              <Typography variant="button" className={classes.label}>
                Email
              </Typography>
              <Typography>robertsmith@company.com</Typography>
            </Box>
            <Box display="flex">
              <Typography variant="button" className={classes.label}>
                Phone
              </Typography>
              <Typography>+84 963 666 083</Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Card>
  );
}
