import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="container  mx-auto">
      <Header />
      <ItemListContainer greeting="JS É MELHOR QUE TS" />
    </div>
  );
}

export default App;
