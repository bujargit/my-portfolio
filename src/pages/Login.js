import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Login() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      console.log(title, details);
    }
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={3} spacing={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      <Typography variant="h6" component="h2" color="primary">
        Create a New Note
      </Typography>
      <AcUnitOutlinedIcon color="primary" />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onClick={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          onClick={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows="4"
          fullWidth
          required
        />
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendRoundedIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
