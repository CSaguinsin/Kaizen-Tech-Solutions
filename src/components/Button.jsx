const Button = ({ children, onClick }) => {
  return (
    <button
      className="btn bg-[#22B5F3] font-[inter] font-semibold text-white border-0 border-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
