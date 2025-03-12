import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="py-3 flex items-center justify-center border-t border-zinc-300">
      <p className="text-zinc-600 text-[12px] tracking-wider">
        <span className="font-semibold">KT Store</span> &copy; {year} | All
        Rights Reserved | Designed and Developed by{" "}
        <span className="font-semibold">PRABANJAN</span>
      </p>
    </div>
  )
}

export default Footer
