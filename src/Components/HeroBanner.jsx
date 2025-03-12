import React from "react"
import BannerImg from "../assets/banner-vegetables.webp"
import { BiRightArrow } from "react-icons/bi"

const HeroBanner = ({ href }) => {
  return (
    <div className="w-full h-96 shadow-2xl bg-linear-to-r from-green-500 to-lime-500 mt-16 relative overflow-hidden">
      <div className="absolute w-[700px] h-[700px] rounded-full bg-neutral-50 -top-72 -left-16 border-[20px] border-zinc-400"></div>
      <h1 className="absolute top-8 left-10 text-3xl font-bold text-white bg-green-600 rounded-full py-2 px-10 border-8 border-lime-500">
        KT Store
      </h1>
      <h2 className="absolute z-50 top-[110px] left-10 text-xl font-bold text-white bg-zinc-900 rounded-full py-2 px-6 border-2 border-gray-600">
        FRESH AND HEALTHY
      </h2>
      <img
        src={BannerImg}
        alt=""
        className="w-[500px] right-1/2 -bottom-5 absolute "
      />
      <div className="absolute right-1/2 top-10 h-32 w-32 rounded-full border-4 border-green-600 flex items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-zinc-800 flex flex-col items-center justify-center">
          <p className="text-4xl font-bold text-white">25%</p>
          <p className="text-3xl font-bold text-lime-400">OFF</p>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-white absolute right-10 top-10 ">
        KT Fresh <span className="text-zinc-800">Store</span>
      </h1>
      <h2 className="text-xl font-bold text-lime-500 bg-white rounded-full px-8 absolute right-10 top-28">
        HEALTH IS NOT BORING
      </h2>
      <a
        href={href}
        className="flex items-center absolute right-10 top-40 border-2 border-zinc-800 cursor-pointer"
      >
        <button className=" font-bold text-xl text-zinc-800 px-8 py-2 bg-lime-300">
          ORDER NOW
        </button>
        <div className="py-[9px] px-4 bg-lime-600">
          <BiRightArrow size={25} />
        </div>
      </a>

      <div className="">
        <h2 className="text-xl font-bold text-lime-500 bg-black rounded-full px-8 absolute right-10 bottom-20">
          CALL US
        </h2>
        <h2 className="text-2xl font-semibold tracking-wider text-white rounded-full absolute right-10 bottom-10">
          +91 9988009988
        </h2>
      </div>
    </div>
  )
}

export default HeroBanner
