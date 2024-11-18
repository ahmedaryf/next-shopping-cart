import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className='bg-purple-300 w-full h-[15vh] px-8'>
      <div className='flex items-center justify-between h-full'>
        <h5>Logo</h5>

        <div className='flex flex-row gap-6 font-bold  '>
          <Link href={"/"}>Home</Link>
          <Link href={"/store"}>Store</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>Cart</Link>
        </div>
      </div>
    </div>
  );
}
