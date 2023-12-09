import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "../../assets/pngegg.png";

export default function Header() {
  return (
    <header className="p-10  h-24 flex items-center fixed top-0 left-0  container  mx-40 z-50  bg-zinc-950 opacity-50">
      <h1 className="flex-1 ">
        <Link to="/">
          <img
            src={logo}
            alt="store logo"
            className="w-16 hover:animate-spin "
          />
        </Link>
      </h1>

      <Link to="/cart" className="flex-1 flex gap-2 justify-end  ">
        <CartWidget />
      </Link>
    </header>
  );
}
