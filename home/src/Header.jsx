import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

export default function Header() {
  return (
    <div className="p-5 bg-yellow-500 text-black text-4xl italic">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">El mundo de la herramienta</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
