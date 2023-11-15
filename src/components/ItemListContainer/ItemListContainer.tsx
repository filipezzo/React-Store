interface Props {
  greeting: string;
}

function ItemListContainer({ greeting }: Props) {
  return (
    <section>
      <p className="mt-10 text-2xl text-blue-500 font-bold text-center">
        {greeting}
      </p>
    </section>
  );
}

export default ItemListContainer;
