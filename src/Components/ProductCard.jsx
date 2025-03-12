import React, { useContext } from "react"
import { BiStar } from "react-icons/bi"
import { Link } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import { toast } from "sonner"

const ProductCard = ({ item }) => {
  const { cartItems, addToCart } = useContext(ShopContext)
  const { id, imgSrc, title, quantity, price, starRate } = item

  const eachCartItemCount = cartItems[id]

  return (
    <div className="col border border-zinc-200 rounded-sm bg-white shadow">
      <Link
        to={`/product/${title}`}
        className="flex items-center justify-center w-full h-52 border-b border-zinc-200"
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-40"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold text-zinc-700 uppercase">{title}</h2>
        <h3 className="text-sm text-zinc-600 font-semibold">
          Quantity: {quantity} Kg
        </h3>
        <h2 className="text-base text-zinc-700 font-semibold ">
          Price: <span className="text-green-800">₹.{price?.toFixed(2)}</span>
        </h2>
        <p className="text-[12px] flex gap-2 items-center">
          Rating: <BiStar color="yellow" /> {starRate}
        </p>
        <button
          onClick={() => {
            addToCart(id)
            toast.success(`${title?.toUpperCase()} is Added to your Cart`)
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 py-1 rounded-md text-white font-semibold mt-2 cursor-pointer"
        >
          Add To Cart {eachCartItemCount > 0 && <>[{eachCartItemCount}]</>}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
