function MiniPlayer() {
  return (
    <div className="mini-player-wrapper">
      <div className="mini-player-bar">
        {/* COVER / ICONA NOTA */}
        <div className="mini-player-cover">
          <i className="bi bi-music-note-beamed mini-player-note"></i>
        </div>

        {/* CONTROLLI PRINCIPALI */}
        <div className="mini-player-controls">
          {/* Shuffle */}
          <button className="mini-player-icon-btn" aria-label="Shuffle">
            <i className="bi bi-shuffle"></i>
          </button>

          {/* Previous */}
          <button className="mini-player-icon-btn" aria-label="Previous Track">
            <i className="bi bi-arrow-left"></i>
          </button>

          {/* Play */}
          <button
            className="mini-player-icon-btn player-play"
            aria-label="Play"
          >
            <i className="bi bi-play-fill"></i>
          </button>

          {/* Next */}
          <button className="mini-player-icon-btn" aria-label="Next Track">
            <i className="bi bi-arrow-right"></i>
          </button>

          {/* Switch Device */}
          <button
            className="mini-player-icon-btn"
            aria-label="Switch Output Device"
          >
            <i className="bi bi-arrow-left-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniPlayer;
