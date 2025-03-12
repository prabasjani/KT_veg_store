import React, { useContext, useEffect, useState } from "react"
import { toast } from "sonner"
import { ShopContext } from "../Context/ShopContext"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {
  const { setAuth } = useContext(ShopContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const user = {
    username: "prabanjan",
    password: "123123",
  }

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username) {
      toast.error("Please enter the Username!")
    }
    if (!password) {
      toast.error("Please enter the Password!")
    }

    if (username && password) {
      if (username == user.username && password == user.password) {
        setAuth(true)
        navigate("/")
        toast.success(`Welcome Mr.${username?.toUpperCase()}`)
      } else if (password.length < 6) {
        toast.warning("Password must be 6 characters!")
      } else {
        toast.error("Incorrect Credentials!")
      }
    }
  }

  return (
    <div className="h-[480px] flex items-center justify-center">
      <div className="w-2/5 p-5 bg white border border-zinc-300 rounded-md">
        <form onSubmit={handleLogin}>
          <h2 className="text-3xl font-semibold text-zinc-700 mb-4">
            Login Here...
          </h2>

          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-zinc-600 ">
              Username
            </label>
            <input
              type="text"
              className="px-4 py-2 focus:outline-none border border-zinc-300 rounded-md"
              placeholder="chris hemsworth"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 my-3">
            <label htmlFor="username" className="text-zinc-600 ">
              Password
            </label>
            <input
              type="password"
              className="px-4 py-2 focus:outline-none border border-zinc-300 rounded-md"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
