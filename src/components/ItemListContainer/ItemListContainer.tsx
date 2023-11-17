import ItemCount from "../ItemCount/ItemCount";

interface Props {
  greeting: string;
}

function ItemListContainer({ greeting }: Props) {
  return (
    <section>
      <p className="mt-10 text-2xl text-blue-500 font-bold text-center">
        {greeting}
      </p>
      <ItemCount stock={5} initial={12} />
      <ItemCount stock={10} initial={4} />
      <ItemCount stock={6} initial={2} />
      <ItemCount stock={0} initial={0} />
    </section>
  );
}

export default ItemListContainer;
