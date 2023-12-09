import { IItem } from "../../interface/interface";
import Item from "./Item";

interface Props {
  list: IItem[];
}
function ItemList({ list }: Props) {
  return (
    <div className=" h-full ">
      <div className="flex flex-wrap justify-center gap-4 w-full   ">
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
