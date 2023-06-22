import { create } from "zustand";

export const usePayStore = create((set) => ({
  fundsIn: "Card",
  fundsOut: "Ecosystem",
  fundsInAmount: 0,
  country: "RO",
  currency: "RON",
  fee: 0,

  setFundsIn: (fundsIn) => set({ fundsIn }),
  setFundsOut: (fundsOut) => set({ fundsOut }),
  setFundsInAmount: (fundsInAmount) => set({ fundsInAmount }),
  setCountry: (country) => set({ country }),
  setCurrency: (currency) => set({ currency }),
  setFee: (fee) => set({ fee }),

}));
