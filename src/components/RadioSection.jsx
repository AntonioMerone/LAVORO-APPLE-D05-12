// src/components/RadioSection.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const RADIO_ITEMS = [
  {
    id: 1,
    img: "/assets/radio1.jpg",
    title: "Prólogo con Abuelo",
    subtitle: "",
  },
  {
    id: 2,
    img: "/assets/radio2.jpg",
    title: "The Wanderer",
    subtitle: "",
  },
  {
    id: 3,
    img: "/assets/radio3.jpg",
    title: "Michael Bublé & Carly Pearce",
    subtitle: "",
  },
];

function RadioSection() {
  return (
    <section className="mt-5">
      <div className="section-header">
        <h2 className="section-title">Nuovi episodi radio</h2>
        <span className="section-arrow">›</span>
      </div>

      <Row className="g-3 mt-2">
        {RADIO_ITEMS.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
            <Card className="radio-card">
              <Card.Img src={item.img} alt={item.title} />
              <Card.Body className="p-1">
                <Card.Text className="radio-title">{item.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default RadioSection;
