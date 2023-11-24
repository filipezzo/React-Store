import { IProduct } from "../../interface/interface";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetails({ details }: IProduct) {
  return (
    <section className=" mt-8 max-w-4xl w-full  mx-auto">
      <div className="flex max-w-xl border max-h-96  p-4  ">
        <div className=" ">
          <img
            className="object-cover max-h-full w-4/5 rounded-md "
            src={details.pictureUrl}
            alt={`details of ${details.title} img`}
          />
        </div>

        <div className="flex flex-col gap-8 ">
          <h2 className="text-gray-500 text-2xl">{details.title}</h2>
          <p>{details.description}</p>
          <p className="text-blue-500 ">
            {details.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <ItemCount stock={5} initial={1} />
        </div>
      </div>
    </section>
  );
}

export default ItemDetails;
