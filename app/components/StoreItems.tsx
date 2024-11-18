"use client";
import React from "react";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import currencyFormatter from "../utils/currencyFormatter";

type storeItemsProp = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  brand: string;
};

export default function StoreItems({
  id,
  name,
  price,
  image_url,
  brand,
}: storeItemsProp) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className='bg-gray-100 w-full h-full text-black flex flex-col justify-items-stretch'>
      <div className=' flex flex-col items-center bg-red-200 h-full p-4'>
        <h5 className='text-xl font-bold mb-2 h-full'>{name}</h5>
        <Image
          src={image_url}
          alt={name}
          width={200}
          height={200}
          className=' object-cover w-full h-full'
        />
        <div className='flex justify-between items-center w-full my-8'>
          <h6>{currencyFormatter(price)}</h6>
          <h6>{brand}</h6>
        </div>
        <div>
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className='bg-purple-700 text-white px-4 rounded-md'>
              + Add to cart
            </button>
          ) : (
            <div>
              <div>
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className='bg-red-700 text-white font-bold text-xl px-2'>
                  -
                </button>
                <span className='text-gray-800 text-sm px-2'>
                  {quantity} in Cart
                </span>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className='bg-green-700 text-white font-bold text-xl px-2'>
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className='bg-red-700 text-white text-center px-2 mt-2 w-full'>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
