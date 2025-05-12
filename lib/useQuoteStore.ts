import { create } from 'zustand';

type QuoteStore = {
  index: number;
  setIndex: (newIndex: number) => void;
};

export const useQuoteStore = create<QuoteStore>((set) => ({
  index: 0,
  setIndex: (newIndex) => set({ index: newIndex }),
}));
