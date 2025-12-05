import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import HeroChill from "../assets/images/1a.png";
import HeroMusica from "../assets/images/1b.png";

function HeroSection() {
  return (
    <section className="mt-3">
      <Row className="g-3">
        {/* CARD SINISTRA - CHILL */}
        <Col xs={12} md={6}>
          <div className="hero-label text-uppercase">Nuova stazione radio</div>
          <p className="hero-title">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
          <Card className="hero-card">
            <Card.Img src={HeroChill} />
          </Card>
        </Col>

        {/* CARD DESTRA - MSICA UNO */}
        <Col xs={12} md={6}>
          <div className="hero-label text-uppercase">Nuova stazione radio</div>
          <p className="hero-title">Ecco la nuova casa della musica latina</p>
          <Card className="hero-card">
            <Card.Img src={HeroMusica} />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;
