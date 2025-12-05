// src/components/HeroSection.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function HeroSection() {
  return (
    <section className="mt-3">
      <Row className="g-3">
        <Col xs={12} md={6}>
          <div className="hero-label text-uppercase">Nuova stazione radio</div>
          <p className="hero-title">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
          <Card className="hero-card">
            <Card.Img src="/assets/chill.jpg" alt="Apple Music Chill" />
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <div className="hero-label text-uppercase">Nuova stazione radio</div>
          <p className="hero-title">Ecco la nuova casa della musica latina</p>
          <Card className="hero-card">
            <Card.Img src="/assets/musica-uno.jpg" alt="Música Uno" />
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection;
