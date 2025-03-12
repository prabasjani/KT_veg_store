import React from "react"
import HeroBanner from "../Components/HeroBanner"
import { storeDatas } from "../data"
import ProductCard from "../Components/ProductCard"

const Shop = () => {
  return (
    <div>
      <HeroBanner href="#shopping" />

      <section id="shopping" className="mt-20 py-20 border-t border-zinc-300">
        <h2 className="text-3xl font-semibold text-zinc-700 mb-8">
          Shop Fresh and Healthy Vegetables
        </h2>
        <div className="grid grid-cols-5 items-center justify-center gap-6">
          {storeDatas.map((item, i) => {
            return <ProductCard item={item} key={i} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Shop
