import { IItem } from "../../interface/interface";

interface CartItemProps {
  item: IItem;
  onRemoving: (item: IItem) => void;
}

function CartItem({ item, onRemoving }: CartItemProps) {
  const handleClick = () => {
    onRemoving(item);
  };
  return (
    <li
      className="flex border  p-4 border-zinc-600 cursor-pointer rounded-md"
      key={item.title}
    >
      <img className="w-24 h-24" src={item.img} alt={item.title} />
      <div className="ml-4 flex flex-col justify-between text-1xl text-blue-500 ">
        <strong>
          {item.price.toLocaleString("en", {
            style: "currency",
            currency: "usd",
          })}
        </strong>
        <p> Quantity : {item.quantity}</p>
        <p>Subtotal: {item.price * item.quantity!}</p>
      </div>
      <button onClick={() => handleClick()}>Delete</button>
    </li>
  );
}

export default CartItem;
