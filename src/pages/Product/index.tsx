import { useEffect, useState } from "react";
import ItemDetailsContainer from "../../components/ItemDetails/ItemDetailsContainer";
import { IItem } from "../../interface/interface";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import OtherItem from "../../components/OtherItem/OtherItem";
import { useFirebase } from "../../context/FirebaseContext";

function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState<IItem[]>([]);
  const [otherProducts, setOtherProducts] = useState<IItem[]>([]);
  const { id } = useParams();

  const { items } = useFirebase();
  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const findItem = items.find((item) => item.id.toString() === id);
        const filteredOtherItem = items.filter(
          (item) => item.id.toString() !== id && item.id !== 8 && item.id !== 9
        );
        if (findItem) {
          setProductDetail(findItem);
          setOtherProducts(filteredOtherItem);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, [id, items]);

  return (
    <>
      <Loading loading={isLoading} />
      {productDetail && (
        <>
          <ItemDetailsContainer details={productDetail} />
          <h2 className="text-2xl text-center text-sky-400 uppercase font-bold my-16">
            You May Also Like{" "}
          </h2>

          <ul className="flex gap-8 mb-8  max-w-7xl mx-auto overflow-hidden w-full ">
            {otherProducts.map((other) => (
              <OtherItem other={other} key={other.id} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Product;
