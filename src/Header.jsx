import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav className="main_header">
        <a href="#products-index">Products</a> | <a href="#products-new">Home </a> | <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
}
