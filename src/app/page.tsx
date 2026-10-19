
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  Cart,
} from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Nav className="me-auto flex-row gap-3">
        <Nav.Link href="#" aria-label="Facebook"><Facebook /></Nav.Link>
        <Nav.Link href="#" aria-label="Twitter"><Twitter /></Nav.Link>
        <Nav.Link href="#" aria-label="Pinterest"><Pinterest /></Nav.Link>
        <Nav.Link href="#" aria-label="Instagram"><Instagram /></Nav.Link>
      </Nav>

      <Nav className="ms-auto flex-row align-items-center">
        <Nav.Link href="#" aria-label="Home"><HouseFill /></Nav.Link>
        <Nav.Link href="#search" aria-label="Search"><Search /></Nav.Link>
        <Nav.Link href="#" aria-label="Account"><PersonFill /></Nav.Link>
        <NavDropdown
          align="end"
          title={<Cart aria-label="Shopping cart" />}
          id="cart-dropdown"
        >
          <NavDropdown.ItemText>
            Your cart is currently empty.
          </NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <Row>
    <Col>
      <Image
        src="https://courses.ics.hawaii.edu/ics314f26/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"
        className="img-fluid mx-auto d-block py-1"
        alt="Island Snow Logo"
      />
    </Col>
  </Row>
);

const MiddleMenu = () => (
  <Row className="justify-content-center pt-4 pb-3">
    <Col className="text-center">
      <Nav className="justify-content-center gap-3">
        {["MEN", "WOMEN", "KIDS", "BRANDS"].map((item) => (
          <NavDropdown
            key={item}
            title={item}
            id={`${item.toLowerCase()}-dropdown`}
            className="fw-bold"
          >
            <NavDropdown.Item href="#">
              View All {item.charAt(0) + item.slice(1).toLowerCase()}
            </NavDropdown.Item>
          </NavDropdown>
        ))}

        <Nav.Link
          href="#search"
          className="text-primary fw-bold"
        >
          SEARCH
        </Nav.Link>
      </Nav>
    </Col>
  </Row>
);

const FullWidthImage = () => (
  <Row>
    <Col>
      <Image
        src="https://courses.ics.hawaii.edu/ics314f26/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"
        className="img-fluid w-100"
        alt="Island Snow bridge"
      />
    </Col>
  </Row>
);

const FooterMenu = () => (
  <footer className="landing-footer py-4">
    <Container fluid>
      <Row>
        <Col md={4} className="mb-4">
          <h5>NAVIGATION</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Employment</a></li>
            <li><a href="#" className="footer-link">Videos</a></li>
          </ul>
        </Col>

        <Col md={4} className="mb-4">
          <h5>MAIN MENU</h5>
          <hr />
          <ul className="list-unstyled">
            <li><a href="#" className="footer-link">Men</a></li>
            <li><a href="#" className="footer-link">Women</a></li>
            <li><a href="#" className="footer-link">Kids</a></li>
          </ul>
        </Col>

        <Col md={4} className="mb-4">
          <h5>CONNECT</h5>
          <hr />
          <p>Sign up for the latest updates</p>
          <form
            className="d-flex gap-2 flex-wrap"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Address"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn btn-dark">
              Join
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  </footer>
);

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid>
      <TopMenu />
      <IslandSnowLogo />
      <MiddleMenu />
      <FullWidthImage />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
