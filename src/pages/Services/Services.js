import React from 'react';
import './Services.css'
import { GiRedCarpet } from "react-icons/gi";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTshirt, FaWeightHanging, FaStar, FaShoePrints, FaCouch, FaScroll, FaShoppingBag, FaWind} from 'react-icons/fa';

function Services() {
  return (
    <div style={{ backgroundColor: "#F3F3F3", padding: "50px 0" }} className="session">
      <Container>
        <div className="a_img">
          {/* <img src="./images/img1.webp" alt="" /> */}
        </div>
        <h1 className="text-center mb-4">All Services</h1>
        <Row>
          {serviceList.map((service, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="text-center p-4 shadow-sm service-card">
                <div className="icon" style={{ fontSize: "40px", color: "#007bff" }}>{service.icon}</div>
                <h5 className="mt-3">{service.title}</h5>
                <p>{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const serviceList = [
  { icon: <FaTshirt />, title: "Dry Cleaning", description: "Professional dry cleaning to keep your garments fresh and clean." },
  { icon: <FaWeightHanging />, title: "Laundry by Kg", description: "Affordable laundry services based on weight." },
  { icon: <FaStar />, title: "Premium Laundry", description: "Exclusive laundry care with premium detergents." },
  { icon: <FaWind />, title: "Steam Ironing", description: "Perfectly pressed clothes with our steam ironing service." },
  { icon: <FaShoePrints />, title: "Shoe Cleaning", description: "Expert shoe cleaning to restore shine and freshness." },
  { icon: <FaShoppingBag />, title: "Bag Cleaning", description: "Careful cleaning for all types of bags." },
  { icon: <FaScroll />, title: "Curtain Cleaning", description: "Fresh and clean curtains for a healthy home." },
  { icon: <FaCouch />, title: "Sofa Cleaning", description: "Professional sofa cleaning for stain-free furniture." },
  { icon: <GiRedCarpet />, title: "Carpet Cleaning", description: "Deep carpet cleaning for dust-free living." }
];

export default Services;
