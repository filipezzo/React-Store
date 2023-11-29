import { useEffect, useState } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Banner from "../../components/Banner/Banner";
import BannerCall from "../../components/Banner/BannerCall";
import Loading from "../../components/Loading/Loading";
import { IProduct } from "../../interface/interface";
import ItemDetailsContainer from "../../components/ItemDetails/ItemDetailsContainer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productDetail, setProductDetail] = useState<IProduct[]>([]);

  const getListRepo = () => {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          title: "Headset",
          price: 110,
          pictureUrl:
            "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 2,
          title: "Beats ",
          price: 80,
          pictureUrl:
            "https://images.unsplash.com/photo-1613497645676-ea691063aa19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 3,
          title: "Fitbit Tracker",
          price: 50,
          pictureUrl:
            "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 4,
          title: "Iphone 14",
          price: 400,
          pictureUrl:
            "https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 5,
          title: "Sony Camera",
          price: 300,
          pictureUrl:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 6,
          title: "Logitech Gaming Mouse",
          price: 30,
          pictureUrl:
            "https://images.unsplash.com/photo-1604171253006-20f7b199b5bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

        {
          id: 7,
          title: "Notebook ",
          price: 500,
          pictureUrl:
            "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]);
    });
  };

  const getItem = () => {
    return new Promise((resolve) => {
      resolve({
        id: 1,
        title: "Headset",
        price: 60,
        pictureUrl:
          "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "One of the best headsets in the market atm. Enjoy the high quality of a great piece of tech",
      });
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
    <div className="container  mx-auto mt-40">
      <Loading loading={isLoading} />
      <Banner />
      <ItemListContainer list={products} greeting="Hot Products 🔥" />
      <BannerCall />
      <ItemDetailsContainer details={productDetail} />
    </div>
  );
}

export default Home;
