import { IProduct } from "../../interface/interface";
import ItemDetails from "./ItemDetails";

interface Props {
  details: IProduct[];
}

function ItemDetailsContainer({ details }: Props) {
  return (
    <section className="mt-40 max-w-7xl mx-auto flex gap-8 ">
      <ItemDetails details={details} />
    </section>
  );
}

export default ItemDetailsContainer;
