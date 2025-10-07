export const Product = ({ name, price, children }) => {
  return (
    <>
      <div>Name : {name}</div>
      <div>Price : {price}</div>
      {children}
    </>
  );
};
