"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeft } from "react-icons/fa6";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useRouter } from "next/navigation";

// Gmail-only validation schema
const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail addresses are allowed"),
  password: z.string().min(1, "Password is required"),
});

const SigninPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login data:", data);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 text-[#00249C] mb-6">
        <button
          onClick={() => router.back()}
          className="bg-[#F8F9FF] p-2 border border-[#ededee] cursor-pointer rounded-lg"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-lg font-semibold">Welcome Back</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mx-auto">
        <h2 className="text-lg font-bold text-[#00249C]">Sign In</h2>
        <p className="text-sm text-gray-500 mb-6">Login to access your account</p>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Email Address</label>
          <input
            {...register("email")}
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Password</label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400"
            />
            {showPassword ? (
              <HiOutlineEyeSlash
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-2 text-[#00249C] text-xl cursor-pointer"
              />
            ) : (
              <HiOutlineEye
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-2 text-[#00249C] text-xl cursor-pointer"
              />
            )}
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#00249C] cursor-pointer text-white py-2 rounded-md font-semibold text-sm"
        >
          Login
        </button>

        {/* Create Account */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <button
            type="button"
            onClick={() => router.push("/home")}
            className="mt-2 w-full bg-[#D6F5EE] cursor-pointer text-[#04B2A6] py-2 rounded-md font-medium text-sm"
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
