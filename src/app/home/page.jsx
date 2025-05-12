"use client";

import React from "react";
import Card from "@/components/Card";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white px-4 py-6">
      {/* Top Bar */}
      <div className="flex items-center gap-3 text-[#00249C]">
        <button
          onClick={() => router.back()}
          className="bg-[#F8F9FF] p-2 cursor-pointer border border-[#ededee] rounded-lg"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-lg font-semibold">Join Maharat</h1>
      </div>

      {/* Main Content */}
      
        <div className="mt-6 lg:text-center">
  <h2 className="text-lg font-semibold text-[#00249C]">Choose your path</h2>
  <p className="text-sm text-gray-600">Select how you want to use Maharat</p>
</div>
        <div className="mt-6">
          <Card />
        </div>
     

      {/* Bottom Prompt */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-600">Already have an account?</p>
        <button
          onClick={() => router.push("/sigin")} // ✅ Route to sign-in page
          className="mt-2 px-6 cursor-pointer py-2 bg-[#E6F4F1] text-[#04B2A6] rounded-full font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
