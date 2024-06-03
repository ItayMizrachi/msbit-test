import { usePacmanSpeedSelectors } from "../zustand-stores/pacman-speed";
import "../css/pacman.css";

const Pacman = () => {
  const pacmanSpeed = usePacmanSpeedSelectors.use.pacmanSpeed();

  return (
    <div className="pacman-page">
      <div className="container" style={{ "--pacman-speed": pacmanSpeed }}>
        <div className="ready-text">Ready!</div>
        <div className="pacman"></div>
      </div>
    </div>
  );
};

export default Pacman;
