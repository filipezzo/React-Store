import { IProduct } from "../../interface/interface";

function Item({ pictureUrl, price, title }: IProduct) {
  return (
    <div className="w-72  bg-gray-500 p-4 rounded-md cursor-pointer mt-4 hover:scale-105 transition-all">
      <img
        className="w-64 h-64 object-cover rounded-md"
        src={pictureUrl}
        alt={"img of" + title}
      />
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
  );
}

export default Item;
