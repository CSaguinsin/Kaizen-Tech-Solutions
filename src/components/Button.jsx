const Button = ({ children, onClick }) => {
  return (
    <button
      className="btn bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm border-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
