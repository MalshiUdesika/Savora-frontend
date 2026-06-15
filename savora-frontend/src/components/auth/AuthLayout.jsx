const AuthLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#FFEDFA] flex items-center justify-center px-4">

      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-xl
        p-6
        md:p-8
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-[#DE3163]
          mb-6
          "
        >
          {title}
        </h1>

        {children}

      </div>

    </div>
  );
};

export default AuthLayout;