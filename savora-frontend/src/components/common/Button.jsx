const Button = ({
  children,
  loading,
  ...props
}) => {

  return (

    <button

      {...props}

      disabled={loading}

      className="
      w-full
      bg-[#DE3163]
      text-white
      py-3
      rounded-xl
      hover:bg-[#E195AB]
      transition
      disabled:opacity-50
      "

    >

      {loading
        ? "Please wait..."
        : children}

    </button>

  );

};

export default Button;