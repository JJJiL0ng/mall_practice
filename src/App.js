import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './bg.png';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage: `url(${bg})`}}></div>

      <Routes>
        <Route path="/" element={<MainPage shoes={shoes} />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

function MainPage({ shoes }) {
  return (
    <Container>
      <Row>
        {shoes.map((shoe, index) => (
          <Product key={shoe.id} shoe={shoe} index={index} />
        ))}
      </Row>
    </Container>
  );
}

function DetailPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="Product" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">Product Name</h4>
          <p>Product Description</p>
          <p>120,000 won</p>
          <button className="btn btn-danger">Order Now</button> 
        </div>
      </div>
    </div> 
  );
}

function AboutPage() {
  return <div>About Page</div>;
}

function Product({ shoe, index }) {
  return (
    <Col>
      <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="40%" alt={shoe.title} />
      <h4>{shoe.title}</h4>
      <p>{shoe.content}</p>
    </Col>
  );
}

export default App;