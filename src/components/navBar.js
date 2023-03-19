import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav navbar-brand justify-content-center navbar-expand-lg bg-body-tertiary">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/main">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/users">
          Users
        </Link>
      </li>
      
    </ul>
  );
};

export default NavBar;
