import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Loading from "./components/Loading/Loading";
import { IProduct } from "./interface/interface";
import ItemDetailsContainer from "./components/ItemDetails/ItemDetailsContainer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productDetail, setProductDetail] = useState<IProduct[]>([]);

  const getListRepo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Headset",
            price: 60,
            pictureUrl:
              "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },

          {
            id: 2,
            title: "Beats Phone",
            price: 30,
            pictureUrl:
              "https://images.unsplash.com/photo-1613497645676-ea691063aa19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },

          {
            id: 3,
            title: "Fitbit Tracker",
            price: 40,
            pictureUrl:
              "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]);
      }, 2000);
    });
  };

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "Headset",
          price: 60,
          pictureUrl:
            "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "One of the best headsets in the market atm. Enjoy the high quality of a great piece of tech",
        });
      }, 2000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const response = await getListRepo();
        setProducts(response as IProduct[]);

        const itemRes = await getItem();
        setProductDetail(itemRes as IProduct[]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, []);

  return (
    <div className="container  mx-auto">
      <Loading loading={isLoading} />
      <Header />
      <ItemListContainer list={products} greeting="Best Seller Products" />

      <ItemDetailsContainer details={productDetail} />
    </div>
  );
}

export default App;
