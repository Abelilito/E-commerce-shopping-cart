export const Panier = ({ panier }) => {
  const sumTotal = panier.reduce((n, { total }) => n + total, 0);
  return (
    <>
      <div className="flex flex-col gap-8 w-full lg:w-[21rem]">
        <div
          className={
            sumTotal > 0 &&
            "border-b border-b-solid border-gray-300" +
              " flex flex-col gap-8 lg:gap-[4rem] h-auto lg:h-[356px] pb-8 lg:pb-0"
          }
        >
          {panier
            .filter((p) => p.quantity > 0)
            .map((p, index) => (
              <div key={index}>
                <div className="font-bold">{p.name}</div>
                <div className="text-[14px]">Quantité : {p.quantity} </div>
                <div className="text-[14px]">Total : {p.total} </div>
              </div>
            ))}
        </div>

        {sumTotal > 0 && (
          <div className="font-bold">TOTAL TTC : {sumTotal}</div>
        )}
      </div>
    </>
  );
};
