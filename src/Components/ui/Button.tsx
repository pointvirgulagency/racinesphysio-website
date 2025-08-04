import Link from "next/link";
import React from "react";

function Button({ className = "" }) {
  return (
    <Link href="/contact" className="w-full flex justify-center">
      <button
        className={`bg-main text-white px-10 py-3 w-auto self-center rounded-full text-sm hover:bg-teal-900 transition-colors font-medium ${className}`}
      >
        Prendre RDV
      </button>
    </Link>
  );
}

export default Button;
