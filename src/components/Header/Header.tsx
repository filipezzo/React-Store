import { Heart, MagnifyingGlass, ShoppingCart } from "phosphor-react";

export default function Header() {
  return (
    <header className="p-10 border border-solid border-gray-500 w-full h-24 flex items-center">
      <h1 className="flex-1 ">
        <a href="#">React Store</a>
      </h1>

      <nav className="flex-1 ">
        <ul className="flex gap-12 justify-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex gap-2  ">
        <div className="flex ml-auto bg-gray-500 px-1 py-2 rounded-lg ">
          <input type="text" className="outline-none bg-transparent" />
          <button type="submit">
            <MagnifyingGlass size={24} />
          </button>
        </div>
        <button className="ml-auto">
          <Heart size={24} />
        </button>

        <button className="ml-4">
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}
