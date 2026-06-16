import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import logo from "../../assets/logo.png";

const VerifyOtp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/users/verify-otp",
        formData
      );

      toast.success(res.data.message);

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Verification Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">

      <div
        className="card shadow-lg border-0 p-5"
        style={{
          width: "450px",
          borderRadius: "20px"
        }}
      >

        <div className="text-center">

          <img
            src={logo}
            alt="Savora Logo"
            width="100"
            className="mb-3"
          />

          <h2
            className="fw-bold"
            style={{
              color: "#C0392B"
            }}
          >
            Verify Your Email
          </h2>

          <p className="text-muted">
            Enter your email and OTP
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-4">

            <label>OTP</label>

            <input
              type="text"
              name="otp"
              className="form-control"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              backgroundColor: "#C0392B"
            }}
          >
            {loading
              ? "Verifying..."
              : "Verify OTP"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default VerifyOtp;