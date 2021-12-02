import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import classes from "./Navbar.module.css";
import HeaderLinks from "./HeaderLinks";

export default function Navbar() {
  return (
    <>
      <header className={`${classes.header} ${classes.header__shadow} ${["primary-bg-color"]}`}>
        <Container>
          <div className={classes.name__placeholder}>
            <Typography variant="h6" color="primary">
              Bujar Hyseni
            </Typography>
          </div>
          <HeaderLinks />
        </Container>
      </header>
    </>
  );
}
