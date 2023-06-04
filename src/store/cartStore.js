import { create } from 'zustand'

const values = [1,2,3]

export const useCartStore = create((set, get) => ({
  dishes: [],
  addDish: (value) => set((state) => ({ dishes: [...state.dishes, {...value}]})),
  // fix: just remove once when do click on "-"
  removeDish: (value) => set((state) => ({dishes: state.dishes.filter((dish) => dish.id !== value.id )})),
  
  cart: 0,
  increaseCart: (value) => set((state) => ({ cart: state.cart + value })),
  decreaseCart: (value) => set((state) => ({ cart: state.cart - value })),
  resetCart: () => set({ cart: 0 }),
}))