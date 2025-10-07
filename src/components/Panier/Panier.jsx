import React from "react";

export const Panier = ({ panier }) => {
  console.log(panier.reduce((n, { total }) => n + total, 0));

  return (
    <div>
      {panier.map((p, index) => (
        <div key={index}>
          <div>Nom : {p.name}</div>
          <div>Prix unitaire : {p.price}</div>
          <div>Quantité :{p.quantity} </div>
          <div>Total :{p.total} </div>
        </div>
      ))}
    </div>
  );
};
