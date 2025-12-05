// src/components/NewReleasesSection.jsx
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function NewReleasesSection() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        // 🔴 Usa l'endpoint Deezer / proxy del corso se diverso
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
        );
        if (!res.ok) throw new Error("Errore Deezer");
        const data = await res.json();
        setTracks(data.data.slice(0, 6)); // 2 righe * 3 card = 6
      } catch (err) {
        console.error(err);
      }
    };

    fetchNewReleases();
  }, []);

  return (
    <section className="mt-5">
      <div className="section-header">
        <h2 className="section-title">Nuove uscite</h2>
        <span className="section-arrow">›</span>
      </div>

      <Row className="g-3 mt-2">
        {tracks.map((track) => (
          <Col key={track.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="song-card">
              <div className="song-cover-wrapper">
                <Card.Img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="song-cover-img"
                />
              </div>
              <Card.Body className="p-1">
                <Card.Text className="song-title">{track.title}</Card.Text>
                <Card.Text className="song-artist">
                  {track.artist.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default NewReleasesSection;
