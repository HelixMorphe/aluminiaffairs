import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-white">
      <div className="border-b flex items-center justify-between md:py-3 sm:px-3 py-2">
        <div className="relative h-[50px] w-[100px] md:h-[100px] md:w-[200px]">
          <Image src="/iiitdmlogo.png" objectFit="contain" layout="fill" />
        </div>

        <p className="text-customBlue text-lg md:text-4xl font-bold text-center">
          Alumini Meet 2021
        </p>
        <div className="relative h-[50px] w-[100px] md:h-[80px] md:w-[150px]">
          <Image
            src="/aa_logo.png"
            height="80"
            width="150"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
