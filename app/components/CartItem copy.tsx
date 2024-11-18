import React from "react";
import storeItems from "../data/data.json";
import Image from "next/image";
import currencyFormatter from "../utils/currencyFormatter";
import { useShoppingCart } from "../context/ShoppingCartContext";

type cartItemProp = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: cartItemProp) {
  const items = storeItems;
  const { removeFromCart } = useShoppingCart();
  return (
    <div className='flex flex-col gap-5 bg-gray-100'>
      {items.map((item) => (
        <div key={item.id} className=''>
          {item.id === id && (
            <div className=' flex flex-col gap-8 items-center'>
              <div className='flex flex-row gap-6 items-center'>
                <h2 className='font-bold text-xl'>{item.name}</h2>
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={200}
                  height={150}
                />
                <div className='flex flex-row gap-4 items-end'>
                  <h6 className='font-semibold text-sm'>
                    Quantity: {quantity}
                  </h6>
                  <h6 className='font-semibold text-sm'>
                    Price: {currencyFormatter(item.price)}
                  </h6>
                  <h6 className='font-bold text-base'>
                    Total: {currencyFormatter(item.price * quantity)}
                  </h6>
                  <div
                    onClick={() => removeFromCart(id)}
                    className='bg-red-700 text-white py-1 px-2 text-sm font-bold cursor-pointer'>
                    X
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
