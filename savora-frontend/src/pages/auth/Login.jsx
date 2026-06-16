import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { loginUser } from "../../service/authService";
import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await loginUser(data);

      login(
        res.data.user,
        res.data.token
      );

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1F2937]">

      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#DE3163]/30 rounded-full blur-[150px]" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#CCDF92]/20 rounded-full blur-[150px]" />

      <div className="absolute top-[40%] left-[45%] w-[350px] h-[350px] bg-[#E195AB]/20 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center px-20">

          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#CCDF92] text-[#1F2937] font-medium mb-8">
              ✨ Premium Restaurant Experience
            </div>

            <h1 className="text-7xl font-extrabold text-white leading-tight">
              Reserve.
              <br />
              Dine.
              <br />
              Enjoy.
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed">
              Experience fine dining, effortless reservations,
              and memorable culinary moments with Savora.
            </p>

            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-[#DE3163]">
                  500+
                </h3>

                <p className="text-gray-400">
                  Reservations Daily
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#DE3163]">
                  50+
                </h3>

                <p className="text-gray-400">
                  Premium Dishes
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#DE3163]">
                  4.9★
                </h3>

                <p className="text-gray-400">
                  Customer Rating
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-10">

          <div
            className="
            w-full
            max-w-md
            p-8
            rounded-[32px]
            border
            border-white/10
            backdrop-blur-2xl
            bg-white/10
            shadow-2xl
          "
          >

            {/* Logo */}
            <div className="flex justify-center mb-6">

              <img
                src={logo}
                alt="Savora"
                className="h-20 object-contain"
              />

            </div>

            <h2 className="text-4xl font-bold text-center text-white">
              Login
            </h2>

            <p className="text-center text-gray-300 mt-3 mb-8">
              Welcome back to Savora
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label className="block text-sm text-gray-200 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-white/10
                    border
                    border-white/20
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-[#DE3163]
                    focus:ring-2
                    focus:ring-[#DE3163]/40
                  "
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* Password */}
              <div>

                <label className="block text-sm text-gray-200 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    bg-white/10
                    border
                    border-white/20
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-[#DE3163]
                    focus:ring-2
                    focus:ring-[#DE3163]/40
                  "
                />

                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

              </div>

              {/* Remember + Forgot */}
              <div className="flex justify-between items-center text-sm">

                <label className="flex items-center gap-2 text-gray-300">

                  <input
                    type="checkbox"
                    className="accent-[#DE3163]"
                  />

                  Remember me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-[#E195AB] hover:text-white"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-[#DE3163]
                  to-[#E195AB]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                {loading
                  ? "Signing In..."
                  : "Sign In"}
              </button>

              {/* Register */}
              <p className="text-center text-gray-300 pt-2">

                Don't have an account?

                <Link
                  to="/register"
                  className="
                    ml-2
                    text-[#CCDF92]
                    font-semibold
                    hover:text-white
                  "
                >
                  Create Account
                </Link>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;