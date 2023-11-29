import { useParams } from "react-router-dom";

function UserDetails() {
  const { product } = useParams();
  console.log(product);

  return (
    <div>
      <h1>Pagina Repo - {product}</h1>
    </div>
  );
}

export default UserDetails;
