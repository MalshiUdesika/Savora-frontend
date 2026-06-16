
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { registerUser } from "../../service/authService";
import logo from "../../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await registerUser(data);

      toast.success("OTP sent to your email");

      navigate("/verify-otp", {
        state: {
          email: data.email,
        },
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-10">

        <div
          className="
          w-full
          max-w-2xl
          p-8 md:p-10
          rounded-[32px]
          border
          border-white/10
          bg-white/10
          backdrop-blur-2xl
          shadow-2xl
        "
        >

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Savora"
              className="h-20 object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-white">
            Create Your Account
          </h1>

          <p className="text-center text-gray-300 mt-3 mb-8">
            Start your premium dining journey with Savora
          </p>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            <div className="h-2 flex-1 rounded-full bg-[#DE3163]" />
            <div className="h-2 flex-1 rounded-full bg-[#E195AB]" />
            <div className="h-2 flex-1 rounded-full bg-[#CCDF92]" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Names */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="block text-sm text-gray-200 mb-2">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="John"
                  {...register("firstName", {
                    required: "First name is required",
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
                  "
                />

                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-200 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Doe"
                  {...register("lastName", {
                    required: "Last name is required",
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
                  "
                />

                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
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
                "
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="+94 77 123 4567"
                {...register("phone", {
                  required: "Phone number is required",
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
                "
              />

              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
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
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
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
                "
              />

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password ||
                    "Passwords do not match",
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
                "
              />

              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Button */}
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
                ? "Creating Account..."
                : "Create My Account"}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-300">

              Already have an account?

              <Link
                to="/login"
                className="
                  ml-2
                  font-semibold
                  text-[#CCDF92]
                  hover:text-white
                "
              >
                Sign In
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;
