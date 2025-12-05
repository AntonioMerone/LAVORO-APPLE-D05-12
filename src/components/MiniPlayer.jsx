// src/components/MiniPlayer.jsx
import Button from "react-bootstrap/Button";

function MiniPlayer() {
  return (
    <div className="mini-player">
      <div className="mini-player-left">
        <span className="mini-player-icon">♪</span>
      </div>
      <div className="mini-player-right">
        <Button
          variant="outline-light"
          size="sm"
          className="mini-player-btn rounded-pill"
        >
          ▶
        </Button>
      </div>
    </div>
  );
}

export default MiniPlayer;
