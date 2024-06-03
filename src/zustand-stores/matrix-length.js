import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const useMatrixLength = create((set) => ({
  matrixColLength: 9,
  matrixRowLength: 9,
  setmatrixColLength: (length) => set(() => ({ matrixColLength: length })),
  setmatrixRowLength: (length) => set(() => ({ matrixRowLength: length })),
}));

export const useMatrixLengthSelectors = createSelectors(useMatrixLength);
export default useMatrixLength;
