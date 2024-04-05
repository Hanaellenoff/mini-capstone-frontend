import { Link } from "react-router-dom";
export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <nav>
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </nav>
    );
  } else {
    authenticationLinks = (
      <nav>
        <Link to="/logoutlink">Logout</Link>
      </nav>
    );
  }

  return (
    <div>
      <nav className="main_header">
        <Link to="/">Products </Link> | <Link to="/productsnew">New</Link> | {authenticationLinks}
      </nav>
    </div>
  );
}
