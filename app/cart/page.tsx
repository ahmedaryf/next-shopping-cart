"use client";
import storeItems from "../data/data.json";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "../components/CartItem";
import currencyFormatter from "../utils/currencyFormatter";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <div className='w-[60vw] m-auto pb-24'>
      <h1 className='text-4xl font-bold text-purple-600 text-center mt-10'>
        Cart
      </h1>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className='font-bold'>
          Cart Total:{" "}
          {currencyFormatter(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
