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
  const { removeFromCart } = useShoppingCart();
  const items = storeItems.find((i) => i.id === id);
  if (items == null) return null;
  return (
    <div className=' flex flex-col gap-8 justify-start'>
      <div className='flex flex-row gap-6 items-center justify-center'>
        <h2 className='font-bold text-xl'>{items.name}</h2>

        <Image
          src={items.image_url}
          alt={items.name}
          width={200}
          height={150}
          className=' aspect-[3/4] object-contain'
        />

        <div className='flex flex-row gap-4 items-end'>
          <h6 className='font-semibold text-sm'>Quantity: {quantity}</h6>
          <h6 className='font-semibold text-sm'>
            Price: {currencyFormatter(items.price)}
          </h6>
          <h6 className='font-bold text-base'>
            Total: {currencyFormatter(items.price * quantity)}
          </h6>
          <div
            onClick={() => removeFromCart(id)}
            className='bg-red-700 text-white py-1 px-2 text-sm font-bold cursor-pointer'>
            X
          </div>
        </div>
      </div>
    </div>
  );
}
