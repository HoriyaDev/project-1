"use client"; // Only needed if you're using App Router

import React from "react";
import { card } from "@/utils/constant";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
      {card.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-xl p-6 w-80 hover:shadow-xl transition-shadow"
        >
          <img src={item.src} alt={item.title} className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold text-[#00249C] mb-2">
            {item.title}
          </h2>
          <p className="text-gray-600 mb-4">{item.disc}</p>
          <ul className="space-y-2 mb-4">
            {[item.details.p1, item.details.p2, item.details.p3].map((point, index) => (
              <li key={index} className="flex items-center text-gray-800">
                <span className="bg-[#00249C] text-white rounded-full p-1 text-xs mr-2">
                  <FaCheck size={10} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <button
            onClick={() => router.push(item.route)}
            className="text-blue-600 cursor-pointer font-medium hover:underline"
          >
            Get Started →
          </button>
       
        </div>
      ))}
    </div>
  );
};

export default Card;
