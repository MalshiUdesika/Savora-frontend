import api from "./api";

export const registerUser = (data) =>
  api.post(
    "/users/register",
    data
  );

export const loginUser = (data) =>
  api.post(
    "/users/login",
    data
  );

export const verifyOtp = (data) =>
  api.post(
    "/users/verify-otp",
    data
  );

export const forgotPassword = (data) =>
  api.post(
    "/users/forgot-password",
    data
  );

export const resetPassword = (data) =>
  api.post(
    "/users/reset-password",
    data
  );