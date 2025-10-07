import { useState } from "react";
import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import { Panier } from "./components/Panier/Panier";

function App() {
  const [panier, setPanier] = useState([]);

  return (
    <div className="container">
      <ShoppingCard panier={panier} setPanier={setPanier} />
      <Panier panier={panier} />
    </div>
  );
}

export default App;
