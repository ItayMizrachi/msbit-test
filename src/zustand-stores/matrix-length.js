import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const useMatrixLength = create((set) => ({
  matrixColLength: 9, 
  matrixRowLength: 9, 
  setmatrixColLength: (length) => set((state) => ({ matrixColLength: length })),
  setmatrixRowLength: (length) => set((state) => ({ matrixRowLength: length })),
}));

export const useMatrixLengthSelectors = createSelectors(useMatrixLength);
export default useMatrixLength;

