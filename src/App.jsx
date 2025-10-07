import { useState } from "react";
import "./App.css";
import ShoppingCard from "./components/ShoppingCard";
import { Panier } from "./components/Panier/Panier";
import LegalNotice from "./components/LegalNotice/LegalNotice";

function App() {
  const [panier, setPanier] = useState([]);

  return (
    <>
      <div className="flex justify-around flex-col lg:flex-row items-center lg:items-start mt-0 lg:mt-[7rem]">
        <ShoppingCard panier={panier} setPanier={setPanier} />
        <Panier panier={panier} />
      </div>
      <div className="pt-[5rem]">
        <LegalNotice />
      </div>
    </>
  );
}

export default App;
