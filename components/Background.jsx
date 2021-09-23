import React from "react";
import AluminiCard from "./AluminiCard";
const background = () => {
  return (
    <div className="bg-cover  flex items-center justify-center bg-hero-pattern bg-no-repeat text-customBlack">
      <div className="md:flex w-[95%] md:w-4/5 items-center justify-center mx-auto py-16">
        <div className="glass p-3 sm:p-10 sm:w-4/5 mx-auto">
          <h1 className="text-center text-3xl font-bold">Schedule</h1>
          <div className="w-full text-[14px] md:text-base mx-auto rounded-lg text-black font-semibold pt-10">
            <ul class="md:list-decimal list-outside list">
              <li>Opening speech by Alumni Affairs Secretary - AVPL Narasimhan</li>
              <li>Address by PIC(Alumni Affairs) - Dr. K. Selvajyothi</li>
              <li>Address by Dr. Senthilkumaran K</li>
              <li>Address by Dr. Sivaselvan B</li>
              <li>Address by Dean Academics - Dr. Binsu J Kailath</li>
              <li>Address by Director - Prof. DVLN Somayajulu</li>
              <li>Speech by alumnus - Anurag Gupta</li>
              <li>Speech by alumnus - Sriram Muralidharan</li>
              <li>Speech by alumnus - Shubham Singh</li>
              <li>Alumni discussion</li>
              <li>Vote of thanks by Joint Alumni Affairs Secretary - N. Sree Dhyuti</li>
            </ul>
          </div>
          <div className="text-customBlack font-bold text-3xl text-center py-4">
            Join Us at
          </div>
          <div className="flex flex-col md:flex-row items-center justify-evenly w-full pt-4 text-sm md:text-base">
            <a href="https://meet.google.com/dwb-dity-svr" target="_blank">
              <div className="bg-white border border-gray-300 my-2 md:bg-transparent shadow-xl md:shadow-none hover:bg-white transition duration-200 py-4 px-6 hover:shadow-lg rounded-xl hover:text-black">
                GMeet Link 1
              </div>
            </a>
            <span>OR</span>
            <a href="https://meet.google.com/hsq-xvpg-zag" target="_blank">
              <div className="bg-white my-2 border border-gray-300  md:bg-transparent shadow-xl md:shadow-none hover:bg-white transition duration-200 py-4 px-6 hover:shadow-lg rounded-xl hover:text-black">
                GMeet Link 2
              </div>
            </a>
          </div>
          <AluminiCard />
        </div>
      </div>
    </div>
  );
};

export default background;
