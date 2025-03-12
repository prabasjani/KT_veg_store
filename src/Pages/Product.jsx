import React from "react"
import { BiStar } from "react-icons/bi"
import { useParams } from "react-router-dom"
import { storeDatas } from "../data"
import { useNavigate } from "react-router-dom"

const Product = () => {
  const { productId } = useParams()
  const product = storeDatas.find((item) => item.title == productId)

  const navigate = useNavigate()
  return (
    <div className="">
      <div className="w-full h-[400px] bg-linear-to-r from-green-200 to-lime-200 mt-16 grid grid-cols-2 gap-10 items-center justify-center">
        <div className="col flex items-center justify-center">
          <img src={product.imgSrc} alt={product.title} className="w-[400px]" />
        </div>
        <div className="col">
          <h1 className="text-6xl text-zinc-800 font-extrabold tracking-widest uppercase">
            {product.title}
          </h1>
          <h3 className="text-2xl font-bold text-zinc-600 my-2">
            Quantity: {product.quantity} Kg
          </h3>
          <h3 className="text-2xl font-bold text-zinc-700">
            Price: ₹.{product.price?.toFixed(2)}
          </h3>
          <p className="text-lg font-semibold text-zinc-500 flex items-center gap-2 mt-2">
            Category:{" "}
            <span className="uppercase text-zinc-700">{product.category}</span>
          </p>
          <p className="text-base text-zinc-500 flex items-center gap-2 mb-2">
            Rating: <BiStar color="yellow" />
            {product.starRate}
          </p>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded-md cursor-pointer">
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 font-semibold text-white rounded-md cursor-pointer"
            >
              Back to Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
