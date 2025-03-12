import React, { useState } from "react"
import { createContext } from "react"
import { storeDatas } from "../data"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  // Set the default cart item is zero for all products
  for (let i = 1; i < storeDatas.length; i++) {
    cart[i] = 0
  }
  return cart
}

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  // Add product to Cart fn
  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }))
  }

  // Remove product from Cart fn
  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }))
  }

  // Total Amount in Cart items
  const totalCartAmount = () => {
    let totalAmount = 0

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let product = storeDatas.find((data) => data.id === Number(item))
        totalAmount += cartItems[item] * product.price
      }
    }
    return totalAmount
  }

  // Cart count
  const cartItemsCount = () => {
    let cartCount = 0

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        cartCount += cartItems[item]
      }
    }
    return cartCount
  }

  // Authentication
  const [auth, setAuth] = useState(false)

  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    cartItemsCount,
    auth,
    setAuth,
  }
  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
