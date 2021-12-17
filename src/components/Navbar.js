import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <>
      <header className="header primary-bg-color header-shadow">
        <Container>
          <div className="name-placeholder">
            <Typography variant="h6" color="primary">
              BujarHyseni
            </Typography>
          </div>
          <div className="links-holder">
            <ul className="main-menu list-unstyled">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="active">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}
