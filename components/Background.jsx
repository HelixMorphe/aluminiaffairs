import React from "react";

const background = () => {
  return (
    <div className="bg-cover  flex items-center justify-center bg-hero-pattern bg-no-repeat text-customBlack">
      <div className="md:flex w-11/12 md:w-4/5 items-center justify-center mx-auto py-16">
        <div className="glass p-10 max-w-xl">
          <h1 className="text-center text-3xl font-bold">Schedule</h1>
          <div className="w-11/12  mx-auto rounded-lg text-customBlack font-semibold pt-10">
            <ul class="list-decimal list-inside">
              <li>Opening speech by Alumni Affairs Secretary - Narasimhan</li>
              <li>Address by PIC(Alumni Affairs) - Dr.Selvajyothi</li>
              <li>Address by Dr. Sivaselvan B</li>
              <li>Address by Dr Senthilkumaran K</li>
              <li>Address by Dean Academics - Dr. Binsu J Kailath</li>
              <li>Address by Dean Academics - Dr. Binsu J Kailath</li>
              <li>Address by director - Prof DVLN Somayajulu</li>
              <li>Alumni discussion</li>
              <li>
                Vote of thanks by Join Alumni Affairs Secretary - N Sree Dhyuti
              </li>
            </ul>
          </div>
          <div className="text-customBlack font-bold text-3xl text-center py-4">
            Join Us at
          </div>
          <div className="flex items-center justify-evenly w-full pt-4">
            <a href="#">
              <div className="bg-white border border-gray-300 hover:border-none md:bg-transparent shadow-xl md:shadow-none hover:bg-white transition duration-200 py-4 px-6 hover:shadow-lg rounded-xl hover:text-black">
                GMeet Link 1
              </div>
            </a>
            <span>and</span>
            <a href="#">
              <div className="bg-white border border-gray-300 hover:border-none md:bg-transparent shadow-xl md:shadow-none hover:bg-white transition duration-200 py-4 px-6 hover:shadow-lg rounded-xl hover:text-black">
                GMeet Link 2
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default background;
