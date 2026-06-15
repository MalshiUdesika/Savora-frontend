import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { registerUser } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await registerUser(data);

      toast.success(
        "OTP sent to your email"
      );

      navigate(
        "/verify-otp",
        {
          state: {
            email: data.email
          }
        }
      );

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
    <AuthLayout title="Create Account">

      <form
        onSubmit={handleSubmit(onSubmit)}
      >

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          "
        >

          <Input
            label="First Name"
            type="text"
            register={register}
            name="firstName"
            errors={errors}
          />

          <Input
            label="Last Name"
            type="text"
            register={register}
            name="lastName"
            errors={errors}
          />

        </div>

        <Input
          label="Email"
          type="email"
          register={register}
          name="email"
          errors={errors}
        />

        <Input
          label="Phone"
          type="text"
          register={register}
          name="phone"
          errors={errors}
        />

        <Input
          label="Password"
          type="password"
          register={register}
          name="password"
          errors={errors}
        />

        <Input
          label="Confirm Password"
          type="password"
          register={register}
          name="confirmPassword"
          errors={errors}
        />

        {watch("password") !==
          watch("confirmPassword") && (
          <p className="text-red-500 mb-4">
            Passwords do not match
          </p>
        )}

        <Button
          loading={loading}
          type="submit"
        >
          Register
        </Button>

        <div className="mt-4 text-center">

          <Link
            to="/login"
            className="text-pink-600"
          >
            Already have an account?
          </Link>

        </div>

      </form>

    </AuthLayout>
  );
};

export default Register;