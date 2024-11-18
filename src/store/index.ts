import create from 'zustand';
import { Store, Product } from '../types';

interface StoreState {
  selectedStore: Store | null;
  cart: { product: Product; quantity: number }[];
  loading: boolean;
  setSelectedStore: (store: Store | null) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  setLoading: (loading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedStore: null,
  cart: [],
  loading: false,
  setSelectedStore: (store) => set({ selectedStore: store }),
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  setLoading: (loading) => set({ loading }),
}));