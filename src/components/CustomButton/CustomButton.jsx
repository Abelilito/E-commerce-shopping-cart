export const CustomButton = ({ icon, classe, fn }) => {
  return (
    <button
      onClick={fn}
      className={classe ? classe : "" + " hover:text-green-400"}
    >
      {icon}
    </button>
  );
};
