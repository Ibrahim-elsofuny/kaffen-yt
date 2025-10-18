import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const decreaseQty = (id) => {
        setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item)).filter((item) => item.qty > 0));
    };

    // 👇 دالة لتفريغ السلة
    const clearCart = () => {
        setCartItems([]);
    };

    return <CounterContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQty, clearCart }}>{children}</CounterContext.Provider>;
}
