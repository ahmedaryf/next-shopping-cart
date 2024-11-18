import React from "react";
import StoreItems from "../data/data.json";
import StoreItem from "../components/StoreItems";

export default function store() {
  return (
    <div>
      <h2 className='text-red-300 text-5xl font-bold text-center'>Store</h2>
      <div className='grid grid-cols-5 gap-4'>
        {StoreItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
