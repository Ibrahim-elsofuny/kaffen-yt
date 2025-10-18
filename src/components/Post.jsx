import React, { useContext } from "react";
import { CounterContext } from "../hooks/CounterContext";

export default function Post({ title, body }) {
    const { cartItems, setCartItems } = useContext(CounterContext);
    return (
        <div className="post-card ">
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>setCartItems(cartItems+1)}>Add To Cart</button>
        </div>
    );
}
