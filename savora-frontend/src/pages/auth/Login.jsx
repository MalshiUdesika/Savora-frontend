import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { loginUser } from "../../service/authService";
import { useAuth } from "../../context/AuthContext";

const Login = () => {

  const navigate =
    useNavigate();

  const {
    login
  } = useAuth();

  const [loading,
    setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();

  const onSubmit =
    async (data) => {

      try {

        setLoading(true);

        const res =
          await loginUser(
            data
          );

        login(
          res.data.user,
          res.data.token
        );

        toast.success(
          "Login successful"
        );

        navigate("/");

      } catch (error) {

        toast.error(
          error.response?.data
            ?.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <AuthLayout
      title="Login"
    >

      <form
        onSubmit={
          handleSubmit(
            onSubmit
          )
        }
      >

        <Input
          label="Email"
          type="email"
          register={register}
          name="email"
          errors={errors}
        />

        <Input
          label="Password"
          type="password"
          register={register}
          name="password"
          errors={errors}
        />

        <Button
          loading={loading}
          type="submit"
        >
          Login
        </Button>

        <div
          className="
          mt-4
          text-center
          "
        >

          <Link
            to="/forgot-password"
            className="
            text-pink-600
            "
          >
            Forgot Password?
          </Link>

        </div>

        <div
          className="
          mt-2
          text-center
          "
        >

          <Link
            to="/register"
            className="
            text-pink-600
            "
          >
            Create Account
          </Link>

        </div>

      </form>

    </AuthLayout>

  );

};

export default Login;