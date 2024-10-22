import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 rounded-lg shadow-lg bg-white max-w-lg border border-gray-300">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Sahifa topilmadi
        </h2>
        <p className="text-gray-500 mt-2">
          Afsuski, bu sahifa topilmadi yoki bu sahifa mavjud emas balikim boshqa
          joyga kochirilgan yoki yoli ozgargan bolishi mumkin.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
