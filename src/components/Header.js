import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="primary-bg-color">
        <div className="container">
          <div className="float-start name-placeholder">
            <Link to="/">Bujar Hyseni</Link>
          </div>
          <div className="float-end">
            <ul className="main-menu list-unstyled">
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="active">LOGIN</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
} 
