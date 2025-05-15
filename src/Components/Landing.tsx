import React from "react";
import { btnsLanding } from "../constants/landing";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing max-lg:flex-col-reverse lg:h-[100vh] max-lg:pb-8 flex items-center justify-between max-lg:justify-center container mx-auto">
      <div className="left w-[600px] grid gap-6 max-lg:w-full max-lg:text-center max-lg:px-6">
        <h1 className="title text-[54px] max-lg:text-[32px] font-bold text-white">
          Reserve your <span className="text-yellow-400">table</span> & enjoy
          the best <span className="text-yellow-400">burger</span> in
          <span className="text-yellow-400"> Hambantota</span>.
        </h1>
        <p className="desc text-slate-100 text-[18px] leading-[1.6] max-lg:text-[14px]">
          Welcome to our burger shop in Hambantota, where we serve delicious,
          freshly made burgers in a cozy atmosphere. Join us for a great meal
          and friendly service!
        </p>
        <div className="btns__group flex items-center gap-4 max-lg:mx-auto max-lg:text-[15px]">
          {btnsLanding.map((ele, index) => (
            <button
              key={index}
              className={`py-3 px-8 transition-all max-lg:py-2 max-lg:px-6 cursor-pointer rounded-4xl  ${
                ele.isConvert
                  ? "text-black bg-yellow-200 border-2 border-solid border-yellow-200 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400"
                  : "bg-yellow-400 text-white border-solid border-2 border-yellow-400 hover:bg-transparent hover:text-yellow-400"
              }`}
            >
              {ele.text}
            </button>
          ))}
        </div>
      </div>
      <div className="right w-[500px] max-lg:w-[300px]">
        <Image src={"/burger.png"} alt="burger" width={500} height={500} />
      </div>
    </section>
  );
}
