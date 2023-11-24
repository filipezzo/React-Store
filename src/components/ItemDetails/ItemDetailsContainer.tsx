import { IProduct } from "../../interface/interface";
import ItemDetails from "./ItemDetails";

interface Props {
  details: IProduct[];
}

function ItemDetailsContainer({ details }: Props) {
  return (
    <div>
      <ItemDetails details={details} />
    </div>
  );
}

export default ItemDetailsContainer;
