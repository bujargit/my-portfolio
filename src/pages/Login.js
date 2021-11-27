import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles();

export default function Login() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h6" component="h2" color="primary">
        Create a New Note
      </Typography>
      <AcUnitOutlinedIcon color="primary" />
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
    </Container>
  );
}
