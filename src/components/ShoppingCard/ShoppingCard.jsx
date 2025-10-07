import CustomButton from "../CustomButton";
import { Product } from "../Product/Product";

export const ShoppingCard = ({ panier, setPanier }) => {
  const lists = [
    { id: 1, name: "T-shirt", price: 20, btn_text: "Ajouter au panier" },
    { id: 2, name: "Short", price: 10, btn_text: "Ajouter au panier" },
    { id: 3, name: "Trousers", price: 50, btn_text: "Ajouter au panier" },
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

  return (
    <div>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            <Product name={list.name} price={list.price}>
              <CustomButton text={list.btn_text} fn={() => addProduct(list)} />
            </Product>
          </li>
        ))}
      </ul>
    </div>
  );
};
