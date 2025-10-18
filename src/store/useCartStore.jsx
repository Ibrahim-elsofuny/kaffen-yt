// src/store/useCartStore.js
import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    cart: [],

    addToCart: (item) =>
        set((state) => {
            const found = state.cart.find((p) => p.id === item.id);
            if (found) {
                return {
                    cart: state.cart.map((p) => (p.id === item.id ? { ...p, qty: (p.qty || 1) + 1 } : p)),
                };
            }
            return { cart: [...state.cart, { ...item, qty: 1 }] };
        }),

    decreaseQty: (id) =>
        set((state) => ({
            cart: state.cart.map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p)).filter((p) => p.qty > 0),
        })),

    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((p) => p.id !== id),
        })),

    clearCart: () => set({ cart: [] }),

    // ✅ نستخدم get بدلاً من set.getState()
    totalPrice: () =>
        get()
            .cart.reduce((sum, p) => sum + p.price * p.qty, 0)
            .toFixed(2),
}));
