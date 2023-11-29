import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "../../assets/pngegg.png";

export default function Header() {
  return (
    <header className="p-10  h-24 flex items-center fixed top-0 left-0  container  mx-40 ">
      <h1 className="flex-1 ">
        <Link to="/">
          <img
            src={logo}
            alt="store logo"
            className="w-16 hover:animate-spin "
          />
        </Link>
      </h1>

      <nav className="flex-1 ">
        <ul className="flex gap-12 justify-center">
          <li>
            <a href="#">Best Sellers</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex gap-2 justify-end  ">
        <CartWidget />
      </div>
    </header>
  );
}
