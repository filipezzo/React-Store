import { Link } from "react-router-dom";

function OtherItem({ other }) {
  return (
    <li key={other.id} className="cursor-pointer hover:scale-105 relative">
      <Link to={`/product/${other.id}`}>
        <img
          className="object-cover w-full h-full rounded-md "
          src={other.pictureUrl}
        />
        <h4 className="absolute bottom-0 p-2 text-blue-300">{other.title}</h4>
      </Link>
    </li>
  );
}

export default OtherItem;
