import { IProduct } from "../../interface/interface";
import ItemList from "../ItemList/ItemList";

interface Props {
  greeting: string;
  list: IProduct[];
}

function ItemListContainer({ greeting, list }: Props) {
  return (
    <section>
      <h2 className="mt-10 mb-4 text-2xl text-blue-500 font-bold text-center">
        {greeting}
      </h2>

      <ItemList list={list} />
    </section>
  );
}

export default ItemListContainer;
