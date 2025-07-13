const Button = ({ name = "ЗАЛИШИТИ ЗАЯВКУ" }) => {
  return (
    <button
      type="button"
      className="rounded text-black min-h-[30px] min-w-[120px] text-center
    bg-[#F47820] no-underline inline-block duration-400 cursor-pointer m-1 text-[13px] font-normal leading-[24px] p-[15px] border-none"
    >
      {name}
    </button>
  );
};

export default Button;
