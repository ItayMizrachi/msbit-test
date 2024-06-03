import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const useMaskLengthStore = create((set) => ({
  maskedLength: 4,
  setMaskedLength: (length) => set(() => ({ maskedLength: length })),
}));

export const useMaskLengthSelectors = createSelectors(useMaskLengthStore);
export default useMaskLengthStore;
