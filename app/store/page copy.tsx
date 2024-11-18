"use client";
import React, { useState } from "react";
import storeData from "../data/data.json";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import currencyFormatter from "../utils/currencyFormatter";

type storeItemsProp = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export default function Store({ id, name, price, image_url }: storeItemsProp) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  console.log(quantity);
  return (
    <div className='bg-gray-100 pb-24'>
      <h1 className='text-5xl font-bold text-purple-700 text-center py-12'>
        Store Page
      </h1>
      <div className='grid grid-cols-5 gap-4 px-8 text-black'>
        {storeData.map((product, index) => (
          <div
            key={index}
            className='bg-gray-200 flex flex-col items-center p-4'>
            <h5 className='text-xl font-bold mb-2 h-full'>{product.name}</h5>
            <Image
              src={product.image_url}
              alt={product.name}
              width={200}
              height={200}
            />
            <div className='flex flex-row justify-between items-start w-full px-12 my-8'>
              <h6>{product.price}</h6>
              <h6>{product.brand}</h6>
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
                      onClick={() => increaseCartQuantity(id)}
                      className='bg-green-700 text-white font-bold text-xl px-2'>
                      +
                    </button>{" "}
                    <span className='text-gray-800 text-sm'>
                      {quantity} in Cart
                    </span>{" "}
                    <button
                      onClick={() => decreaseCartQuantity(id)}
                      className='bg-red-700 text-white font-bold text-xl px-2'>
                      -
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
        ))}
      </div>
    </div>
  );
}
