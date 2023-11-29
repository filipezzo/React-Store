import { Link } from "react-router-dom";
import { IProduct } from "../../interface/interface";

function Item({ pictureUrl, price, title, id }: IProduct) {
  return (
    <>
      <div className="w-64  bg-gray-600 p-4 rounded-md cursor-pointer mt-4 hover:scale-105 transition-all">
        <Link to={`/product/${id}`}>
          <img
            className="w-64 h-64 object-cover rounded-md"
            src={pictureUrl}
            alt={"img of" + title}
          />
        </Link>

        <div className="flex justify-between mt-4">
          <h3>{title}</h3>
          <strong>
            {price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </strong>
        </div>
      </div>
    </>
  );
}

export default Item;
