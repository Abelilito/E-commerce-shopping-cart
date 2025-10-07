import FormatAmout from "../FormatAmout/FormatAmout";

export const Product = ({ name, description, price, img_url, children }) => {
  return (
    <>
      <div className="w-full md:w-[90px] text-start lg:text-center">
        <img
          src={img_url}
          alt={name}
          className="inline-block p-0 max-h-[60px] max-w-[80px] leading-[1.2] align-middle"
        />
      </div>

      <div className="flex flex-col gap-[5px] w-full lg:w-[24rem]">
        <div className="font-bold">{name}</div>
        <div className="text-[10px] text-gray-600">{description}</div>
      </div>

      <div className="font-bold text-[16px] block text-center w-[6rem]">
        <FormatAmout amount={price} />
      </div>

      {children}
    </>
  );
};
