"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaArrowLeft, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";

// Validation schema
const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

const Freelancer = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    router.push("/sigin");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 text-[#00249C] mb-6">
        <button onClick={() => router.back()} className="bg-[#F8F9FF] cursor-pointer p-2 border border-[#ededee] rounded-lg">
          <FaArrowLeft />
        </button>
        <h1 className="text-lg font-semibold">Freelancer</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mx-auto">
        <h2 className="text-lg font-bold text-[#00249C]">Create an Account</h2>
        <p className="text-sm text-gray-500 mb-6">Start your journey as a professional freelancer</p>

        {/* Full Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
          <input
            {...register("fullName")}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>

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

        {/* Phone */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Phone Number</label>
          <div className="relative">
            <input
              {...register("phone")}
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400"
            />
            <FaPhone className="absolute right-3 top-3.5 text-[#00249C] text-sm" />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
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
              <FaEye
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-3.5 text-[#00249C] text-sm cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-3.5 text-[#00249C] text-sm cursor-pointer"
              />
            )}
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400"
            />
            {showConfirmPassword ? (
              <FaEye
                onClick={() => setShowConfirmPassword(false)}
                className="absolute right-3 top-3.5 text-[#00249C] text-sm cursor-pointer"
              />
            ) : (
              <FaEyeSlash
              
                onClick={() => setShowConfirmPassword(true)}
                className="absolute right-3 top-3.5 text-[#00249C] text-sm cursor-pointer"
              />
            )}
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2 mb-4">
          <input type="checkbox" {...register("terms")} className="mt-1" />
          <label className="text-sm leading-tight">
            I accept the terms <br />
            <a href="#" className="text-blue-600 underline">Read our T&Cs</a>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-xs mb-1">{errors.terms.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#00249C] cursor-pointer text-white py-2 rounded-md font-semibold text-sm"
        >
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <button
            type="button"
            onClick={() => router.push("/sigin")}
            className="mt-2 w-full bg-[#D6F5EE] cursor-pointer text-[#04B2A6] py-2 rounded-md font-medium text-sm"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Freelancer;
