const Home = () => {
  return (

    <div>

      <section className="min-h-screen flex items-center justify-center bg-[#FFEDFA]">

        <div className="text-center">

          <h1 className="text-6xl font-bold text-[#DE3163]">
            Welcome to Savora
          </h1>

          <p className="text-xl mt-5 text-gray-700">
            Reserve tables and pre-order meals effortlessly.
          </p>

          <button
            className="
            mt-8
            bg-[#DE3163]
            text-white
            px-8
            py-3
            rounded-xl
            hover:bg-[#E195AB]
            transition
            "
          >
            Explore Menu
          </button>

        </div>

      </section>

    </div>

  );
};

export default Home;