import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const usePacmanSpeed = create((set) => ({
  pacmanSpeed: 2, 
  setPacmanSpeed: (speed) => set((state) => ({ pacmanSpeed: speed })),
}));

export const usePacmanSpeedSelectors = createSelectors(usePacmanSpeed);
export default usePacmanSpeed;

