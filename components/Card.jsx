import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ link, image, name, subtitle }) => {
  return (
    <div className="w-1/2 mx-auto md:w-11/12 md:mx-2 pt-10 pb-5 bg-white rounded-lg shadow-md flex flex-col items-center">
      <div className="rounded-full flex items-center pb-10">
        <Image
          src={image}
          height="100px"
          width="100px"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <div className="text-blue-600 hover:text-blue-800 py-2">
          <Link href={link}>{name}</Link>
        </div>
        <div className="text-gray-600 w-11/12 mx-auto text-center">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Card;
