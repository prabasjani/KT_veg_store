import React, { useContext, useEffect, useState } from "react"
import { BiTrashAlt } from "react-icons/bi"
import { storeDatas } from "../data"
import { ShopContext } from "../Context/ShopContext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartAmount,
    cartItemsCount,
    auth,
  } = useContext(ShopContext)

  const subTotal = totalCartAmount()
  const cartCount = cartItemsCount()

  const offerApplied = subTotal > 300 ? (subTotal * 0.1).toFixed(2) : 0

  const [paymentMethod, setPaymentMethod] = useState("")

  const navigate = useNavigate()

  const orderPlacedFn = () => {
    if (!paymentMethod) {
      toast.error("Please Select the Payment Method to Proceed!")
    } else if (cartCount < 1) {
      toast.info("No products in your Cart!")
    } else if (auth) {
      toast.success("Order Placed Successfully")
      navigate("/")
    } else {
      toast.error("Please Login to Place your Order!")
    }
  }

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-zinc-700 mb-8 uppercase">
        Your cart items
      </h2>

      <div class="relative overflow-x-auto border border-zinc-300 rounded-md">
        <table class="w-full text-sm text-center  text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Actual Price
              </th>
              <th scope="col" class="px-6 py-3">
                Total Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {storeDatas.map((item, i) => {
              if (cartItems[item.id] > 0) {
                return (
                  <tr class="bg-white border-b border-gray-200" key={i}>
                    <th
                      scope="row"
                      class="px-6 py-2 flex items-center justify-center font-medium text-gray-900 "
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-16"
                      />
                    </th>
                    <td class="px-6 py-2 text-zinc-800 font-bold">
                      {item.title}
                    </td>
                    <td class="px-6 py-2">
                      {(cartItems[item.id] * item.quantity).toFixed(1)} Kg
                    </td>
                    <td class="px-6 py-2">₹. {item.price}</td>
                    <td class="px-6 py-2 font-bold ">
                      ₹. {cartItems[item.id] * item.price}
                    </td>
                    <td class="px-6 py-2">
                      <button
                        className="font-bold text-4xl cursor-pointer text-green-500 hover:text-green-600"
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="font-bold text-4xl cursor-pointer text-red-500 hover:text-red-600 ml-5"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <div className="my-10">
        <h2 className="text-3xl font-semibold text-zinc-700 mb-8 uppercase">
          Checkout
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="col bg-neutral-50 p-5 rounded-md border border-zinc-300">
            <div className="border-b border-zinc-300 pb-5">
              <h3 className="text-xl font-bold text-zinc-700 mb-2">
                Delivery Address
              </h3>
              {/* {deliveryAddress ? <Address /> : <AddressInput />} */}
              <div className="text-[12px]">
                <p>Prabanjan</p>
                <p>Street</p>
                <p>City, Landmark</p>
                <p>Hometown, dist, state</p>
              </div>

              <Link>Add Address</Link>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold text-zinc-700 mb-2">
                Select Payment Method
              </h3>
              <div className="flex flex-col gap-3 pb-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    id="upi"
                    value="UPI"
                    name="payment_method"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="upi" className="text-[12px]">
                    All UPI's
                  </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    id="cod"
                    value="Cash On Delivery"
                    name="payment_method"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="cod" className="text-[12px]">
                    Cash On Delivery
                  </label>
                </div>
              </div>

              <p className="text-[12px] border-t border-zinc-300 pt-4">
                Choose a payment method to continue checking out. You will still
                have a chance to review and edit your order before it is final.
              </p>
            </div>
          </div>
          <div className="col bg-neutral-50 p-5 rounded-md border border-zinc-300">
            <h3 className="text-xl font-bold text-zinc-700 mb-2">
              Order Summary
            </h3>
            <div className="flex flex-col gap-3 text-sm pb-4 border-b border-zinc-300">
              <div className="flex items-center justify-between">
                <p>Payment Mode: </p>
                <p className="font-semibold text-zinc-700">{paymentMethod}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Total: </p>
                <p className="font-semibold text-zinc-700">
                  ₹. {subTotal?.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>No of Items: </p>
                <p className="font-semibold text-zinc-700">{cartCount} Items</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Offer: </p>
                <p className="font-semibold text-zinc-700">
                  {subTotal > 300 ? "10 %" : "-"}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p>Save: </p>
                <p className="font-semibold text-red-600">₹. {offerApplied}</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-zinc-300">
              <p className="font-semibold">Order Total: </p>
              <p className="font-semibold text-green-600">
                ₹. {(subTotal - offerApplied).toFixed(2)}
              </p>
            </div>

            <button
              onClick={orderPlacedFn}
              className="w-full py-2 bg-amber-300 hover:bg-amber-400 rounded-full mt-4 font-semibold text-zinc-800 cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
