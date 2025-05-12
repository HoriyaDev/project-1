"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8F9FF] px-4 py-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 text-[#00249C] mb-10">
        <button
          onClick={() => router.back()}
          className="bg-white p-2 border border-[#ededee] rounded-lg"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-lg font-semibold">Welcome Back</h1>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white px-6 py-4 rounded-xl text-[#00249C] text-sm font-semibold shadow">
          Screen is in progress
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
