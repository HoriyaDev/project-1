"use client";

import Image from 'next/image';
import { useState } from 'react';
import { data } from '@/utils/constant';

export default function WalkAround() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
   
    setCurrentIndex(data.length - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 w-full bg-white">
      {/* Logo */}
      <div className="mt-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={400}
          height={100}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[240px] h-[240px] overflow-hidden mt-5 rounded-xl">
          <Image
            src={data[currentIndex].src}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#00249C] mt-3">
          {data[currentIndex].title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm px-4">{data[currentIndex].disc}</p>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {data.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#00249C] w-5' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center w-full max-w-[400px] px-6 mt-6">
        <button
          className="text-[#00249C] font-medium"
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          className="bg-[#B6F5E6] text-[#00249C] px-4 py-2 rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
