import { useState } from "react";
import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import { Panier } from "./components/Panier/Panier";

function App() {
  const [panier, setPanier] = useState([]);

  return (
    <div className="flex justify-around flex-col lg:flex-row items-center lg:items-start">
      <ShoppingCard panier={panier} setPanier={setPanier} />
      <Panier panier={panier} />
    </div>
  );
}

export default App;
