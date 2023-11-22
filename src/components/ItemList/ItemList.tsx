import { IProduct } from "../../interface/interface";
import Item from "./Item";

interface Props {
  list: IProduct[];
}
function ItemList({ list }: Props) {
  return (
    <div className=" h-full">
      <div className="flex gap-4 p-4  max-w-4xl mx-auto ">
        {list.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            pictureUrl={item.pictureUrl}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
