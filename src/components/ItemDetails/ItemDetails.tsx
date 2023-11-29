import { IProduct } from "../../interface/interface";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetails({ details }: IProduct) {
  return (
    <>
      <div className="max-w-[384px] max-h-[384px] w-full h-full rounded-md  border border-gray-700 overflow-hidden">
        <img
          className="w-96 h-96 object-cover "
          src={details.pictureUrl}
          alt={`details of ${details.title} img`}
        />
      </div>
      <div className="flex flex-col  justify-between">
        <h2 className="uppercase text-2xl text-blue-500 font-bold ">
          {details.title}
        </h2>
        <div className="gap-2">
          <p>Details:</p>
          <p>{details.description}</p>
        </div>
        <p>
          {details.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <ItemCount stock={5} initial={1} />
      </div>
    </>
  );
}

export default ItemDetails;
