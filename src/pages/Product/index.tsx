import { useEffect, useState } from "react";
import ItemDetailsContainer from "../../components/ItemDetails/ItemDetailsContainer";
import { IProduct } from "../../interface/interface";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import OtherItem from "../../components/OtherItem/OtherItem";
import product1 from "../../assets/JBL_JR 310BT_Product Image_Hero_Skyblue.png";
import product2 from "../../assets/ubl-2.png";

function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [productDetail, setProductDetail] = useState<IProduct[]>([]);
  const [otherProducts, setOtherProducts] = useState<IProduct[]>([]);
  const { id } = useParams();
  const getItem = () => {
    return new Promise((resolve) => {
      resolve([
        {
          id: 1,
          title: "Headset",
          price: 60,
          pictureUrl:
            "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Immerse yourself in top-notch audio quality with our premium headset. Elevate your gaming or music experience with RGB LEDs, Instant Voice Assistant, and versatile connectivity options such as USB, AUX, Bluetooth v5.1, and FM. The Party Pal 50, featuring a Type-C interface, is the perfect choice to set the mood at any gathering.",
        },
        {
          id: 2,
          title: "Beats",
          price: 80,
          pictureUrl:
            "https://images.unsplash.com/photo-1613497645676-ea691063aa19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Experience the pinnacle of audio excellence with our Beats headphones. Enjoy premium sound quality, customizable RGB LEDs, and seamless connectivity via USB, AUX, Bluetooth v5.1, and FM. The Party Pal 50, equipped with a Type-C interface, ensures you have everything you need to create the perfect atmosphere for your party.",
        },
        {
          id: 3,
          title: "Fitbit Tracker",
          price: 50,
          pictureUrl:
            "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Keep track of your fitness journey with the Fitbit Tracker. This sleek and powerful device offers advanced features to monitor your health and activities. With a stylish design and user-friendly interface, the Fitbit Tracker is your perfect companion on the path to wellness.",
        },
        {
          id: 4,
          title: "iPhone 14",
          price: 400,
          pictureUrl:
            "https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Unleash the power of technology with the iPhone 14. Experience cutting-edge features, a stunning display, and unparalleled performance. Capture life's moments with the advanced camera system and stay connected with the latest innovations. The iPhone 14 is more than a smartphone; it's a lifestyle.",
        },
        {
          id: 5,
          title: "Sony Camera",
          price: 300,
          pictureUrl:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Capture breathtaking moments with the Sony Camera. Equipped with advanced features and cutting-edge technology, this camera ensures you never miss a shot. Whether you're a photography enthusiast or a casual shooter, the Sony Camera delivers exceptional image quality and versatility.",
        },
        {
          id: 6,
          title: "Logitech Gaming Mouse",
          price: 30,
          pictureUrl:
            "https://images.unsplash.com/photo-1604171253006-20f7b199b5bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Enhance your gaming experience with the Logitech Gaming Mouse. Designed for precision and comfort, this mouse delivers responsive control for gaming enthusiasts. With customizable features and a sleek design, the Logitech Gaming Mouse is your ultimate companion in the virtual world.",
        },
        {
          id: 7,
          title: "Notebook",
          price: 500,
          pictureUrl:
            "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description:
            "Experience unparalleled productivity with our high-performance notebook. Packed with advanced features, powerful hardware, and a sleek design, this notebook is ideal for work, creativity, and entertainment. Elevate your computing experience with the Notebook, your gateway to seamless multitasking and immersive content consumption.",
        },

        {
          id: 8,
          title: "UBL Wireless",
          price: 250,
          pictureUrl: product1,
          description:
            "Immerse yourself in the world of premium sound with UBL Wireless. These wireless headphones redefine your audio experience, providing crystal-clear sound quality and a comfortable, ergonomic design. With advanced Bluetooth technology, enjoy seamless connectivity and the freedom to move without the hassle of wires. Elevate your music and entertainment moments with UBL Wireless – where style meets performance.",
        },

        {
          id: 9,
          title: "UBL Street",
          price: 200,
          pictureUrl: product2,
          description:
            "Step into the urban beats with UBL Street headphones. Designed for those who appreciate style and performance, UBL Street delivers a powerful audio experience in a sleek, on-the-go design. Immerse yourself in your favorite tunes with clarity and depth. The foldable design and lightweight construction make UBL Street the perfect companion for your daily adventures. Elevate your street style with UBL Street headphones.",
        },
      ]);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const itemRes = await getItem();
        const findItem = itemRes.find((item) => item.id.toString() === id);
        const filteredOtherItem = itemRes.filter(
          (item) => item.id.toString() !== id && item.id !== 8 && item.id !== 9
        );
        if (findItem) {
          setProductDetail(findItem as IProduct[]);
          setOtherProducts(filteredOtherItem);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    onMount();
  }, [id]);

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
