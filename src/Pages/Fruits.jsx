import React from "react"
import { storeDatas } from "../data"
import ProductCard from "../Components/ProductCard"

const Fruits = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-zinc-700 mb-8 uppercase">
        Shop the Fresh Fruits
      </h2>
      <div className="grid grid-cols-5 items-center justify-center gap-6">
        {storeDatas.map((item, i) => {
          return item.category == "fruits" ? (
            <ProductCard item={item} key={i} />
          ) : null
        })}
      </div>
    </div>
  )
}

export default Fruits
