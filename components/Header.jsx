import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-white">
      <div className="border-b flex items-center justify-between md:py-3 px-3">
        <Image
          src="/iiitdmlogo.png"
          height="100"
          width="200"
          objectFit="contain"
        />
        <p className="text-customBlue text-xl md:text-4xl font-bold text-center">
          Alumini Meet 2021
        </p>
        <Image src="/aa_logo.png" height="80" width="150" objectFit="contain" />
      </div>
    </div>
  );
};

export default Header;
