import { create } from "zustand";

export const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (item) =>
        set((state) => {
            const existing = state.cartItems.find((i) => i.id === item.id);
            if (existing) {
                return {
                    cartItems: state.cartItems.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i)),
                };
            }
            return { cartItems: [...state.cartItems, { ...item, qty: 1 }] };
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
    clearCart: () => set({ cartItems: [] }),
}));
