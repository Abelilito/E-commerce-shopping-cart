import { CircleMinus, CirclePlus } from "lucide-react";
import CustomButton from "../CustomButton";
import { Product } from "../Product/Product";
import nikkonImg from "../../assets/products/nikkon_zf.jpg";
import hermanPhoenix from "../../assets/products/harman_phoenix.jpg";
import objectif from "../../assets/products/objectif.jpg";

export const ShoppingCard = ({ panier, setPanier }) => {
  const lists = [
    {
      id: 1,
      name: "Nikon ZF",
      description: `
        Capteur plein format 24.5 Mpixels et jusqu'à 96 Mpixels (Pixel Shift)
        Stabilisation jusqu'à 8 stops - Couverture AF de 96% - 2 Slots
        Suivi 3D - Jusqu'à 4K 60p - Switch couleur / noir et blanc
      `,
      price: 2399,
      img_url: nikkonImg,
    },
    {
      id: 2,
      name: "HARMAN Phoenix II 120 200Asa",
      description: `
        Une toute nouvelle émulsion
        Un grain plus lisse
        Une plus grande latitude d'exposition
      `,
      price: 14,
      img_url: hermanPhoenix,
    },
    {
      id: 3,
      name: "TTARTISAN 14mm f/2.8 Nikon Z (New)",
      description: `
        Grand angle 14mm à grande ouverture F2.8
        Construction métallique - Mise au point manuelle
        Monture nikon Z
      `,
      price: 229,
      img_url: objectif,
    },
  ];

  function addProduct(item) {
    let itemIndex = panier.findIndex((p) => p.id === item.id);

    if (itemIndex >= 0) {
      const newPanier = panier.map((p) =>
        p.id === item.id
          ? {
              ...p,
              quantity: p.quantity + 1,
              total: (p.quantity + 1) * p.price,
            }
          : p
      );
      setPanier(newPanier);
    } else {
      let newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        total: 1 * item.price,
      };
      setPanier([...panier, newItem]);
    }
  }

  function removeProduct(item) {
    let itemIndex = panier.findIndex((p) => p.id === item.id);

    if (itemIndex >= 0) {
      const newPanier = panier.map((p) =>
        p.id === item.id
          ? {
              ...p,
              quantity: p.quantity - 1,
              total: (p.quantity - 1) * p.price,
            }
          : p
      );
      setPanier(newPanier);
    }
  }

  function quantityByProduct(item) {
    const rt = panier.find((p) => p.id === item.id);
    if (rt) {
      return rt.quantity;
    }
  }
  return (
    <div className="w-full lg:w-[50%]">
      <ul>
        {lists.map((list, index) => (
          <li
            key={index}
            className="
              flex gap-4 md:gap-8 items-center mb-[3rem] md:mb-8 flex-col md:flex-row border-b border-b-solid
              border-gray-300 pb-8 justify-between
            "
          >
            <Product
              name={list.name}
              description={list.description}
              price={list.price}
              img_url={list.img_url}
            >
              <div className="flex justify-center gap-[5px] ">
                {}
                <CustomButton
                  icon={<CircleMinus />}
                  classe={
                    quantityByProduct(list)
                      ? "pointer-events-auto"
                      : "pointer-events-none text-gray-300"
                  }
                  fn={() => removeProduct(list)}
                />

                <CustomButton
                  icon={<CirclePlus />}
                  fn={() => addProduct(list)}
                />
              </div>
            </Product>
          </li>
        ))}
      </ul>
    </div>
  );
};
