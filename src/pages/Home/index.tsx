import { useEffect, useState } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Banner from "../../components/Banner/Banner";
import BannerCall from "../../components/Banner/BannerCall";
import Loading from "../../components/Loading/Loading";
import { IItem } from "../../interface/interface";
import { useFirebase } from "../../context/FirebaseContext";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IItem[]>([]);

  const { items } = useFirebase();

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        setProducts(items as IItem[]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, [items]);

  return (
    <div className="container  mx-auto mt-40">
      <Loading loading={isLoading} />
      <Banner />
      <ItemListContainer list={products} greeting="Hot Products 🔥" />
      <BannerCall />
    </div>
  );
}

export default Home;
