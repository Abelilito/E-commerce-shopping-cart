import CustomButton from "../CustomButton";
import { Product } from "../Product/Product";

export const ShoppingCard = ({ panier, setPanier }) => {
  const lists = [
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Short", price: 10 },
    { id: 3, name: "Trousers", price: 50 },
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

  return (
    <div>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>
            <Product name={list.name} price={list.price}>
              <CustomButton text={list.btn_text} fn={() => addProduct(list)} />
              <CustomButton text="-" fn={() => removeProduct(list)} />
            </Product>
          </li>
        ))}
      </ul>
    </div>
  );
};
