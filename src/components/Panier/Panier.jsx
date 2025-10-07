import React from "react";

export const Panier = ({ panier }) => {
  return (
    <div>
      {panier.map((p, index) => (
        <>
          <div>Nom : {p.name}</div>
          <div>Prix unitaire : {p.price}</div>
          <div>Quantité :{p.quantity} </div>
          <div>Total :{p.total} </div>
        </>
      ))}
    </div>
  );
};
