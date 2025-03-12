import React, { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ShopContext } from "../Context/ShopContext"
import { toast } from "sonner"

const Navbar = () => {
  const { cartItemsCount, auth, setAuth } = useContext(ShopContext)
  const cartCount = cartItemsCount()

  const navigate = useNavigate()

  const handleAuth = () => {
    if (auth) {
      setAuth(false)
      toast.success("Logged Out!")
      navigate("/")
    } else {
      navigate("/auth")
    }
  }
  return (
    <div className="py-4 flex items-center justify-between border-b border-zinc-300">
      <div className="text-3xl font-bold tracking-wider">KTStore</div>
      <div className="flex items-center gap-8 text-zinc-600 font-semibold">
        <NavLink className="hover:text-zinc-800" to="/">
          Shop
        </NavLink>
        <NavLink className="hover:text-zinc-800" to="/vegetables">
          Vegetables
        </NavLink>
        <NavLink className="hover:text-zinc-800" to="/fruits">
          Fruits
        </NavLink>
        <NavLink className="hover:text-zinc-800" to="/spices">
          Spices
        </NavLink>
      </div>
      <div className="flex items-center gap-5">
        <Link to="/cart" className="relative cursor-pointer">
          <FaShoppingCart size={25} />
          <div className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-sm font-semibold">
            {cartCount}
          </div>
        </Link>
        <button
          onClick={handleAuth}
          className="px-6 py-1 rounded-full font-semibold border border-zinc-500 hover:bg-blue-600 hover:border hover:border-blue-600 hover:text-white cursor-pointer"
        >
          {auth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
