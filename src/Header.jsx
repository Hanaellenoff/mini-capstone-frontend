import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav className="main_header">
        <Link to="/products">Products </Link> | <Link to="/productsnew">New</Link> |<Link to="/signup">Signup</Link> |{" "}
        <Link to="/login">Login</Link> | <Link to="/logoutlink">Logout</Link>
      </nav>
    </div>
  );
}
