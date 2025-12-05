import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EXPLORE_ITEMS = [
  "Esplora per genere",
  "Decenni",
  "Attività e stati d'animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
];

function ExploreSection() {
  return (
    <section className="mt-5 mb-4">
      <h2 className="section-title mb-3">Altro da esplorare</h2>

      <Row className="g-3">
        {EXPLORE_ITEMS.map((label) => (
          <Col key={label} xs={12} md={4}>
            <div className="explore-item">
              <span>{label}</span>
              <span className="explore-arrow">›</span>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ExploreSection;
