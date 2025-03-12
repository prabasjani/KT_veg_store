import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import Vegetables from "./Pages/Vegetables"
import Fruits from "./Pages/Fruits"
import Spices from "./Pages/Spices"
import Product from "./Pages/Product"
import AuthPage from "./Pages/AuthPage"
import Navbar from "./Components/Navbar"
import ShopContextProvider from "./Context/ShopContext"
import Cart from "./Pages/Cart"
import { Toaster } from "sonner"
import Missing from "./Pages/Missing"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="bg-neutral-100 px-20">
      <ShopContextProvider>
        <Toaster richColors position="top-right" />
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/spices" element={<Spices />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />

            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<Missing />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
