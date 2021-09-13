import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/SendRounded";

export default function ContactMe() {
  return (
    <Card>
      <Box p={3} maxWidth={600}>
        <Box mb={2}>
          <Typography variant="button">Contact Me</Typography>
        </Box>
        <FormControl fullWidth>
          <TextField label="Your name" variant="outlined" margin="dense" />
          <TextField label="Email" variant="outlined" margin="dense" />
          <TextField label="Subject" variant="outlined" margin="dense" />
          <TextField
            label="Content"
            variant="outlined"
            margin="dense"
            multiline
            minRows={6}
          />
        </FormControl>
        <Box mt={4}>
          <Button variant="outlined" color="primary" startIcon={<SendIcon />}>
            Send message
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
