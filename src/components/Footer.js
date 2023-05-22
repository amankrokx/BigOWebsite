import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/imgs/official/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end ">
            <div className="social-icon space">
              <a href="https://www.linkedin.com/in/bigo-cp-club-rnsit-3a0213217">
                <img src={navIcon1} alt="Icon" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a> */}
              <a href="https://instagram.com/bigo_rnsit?igshid=NTc4MTIwNjQ2YQ==">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            <a href="#">
              <button className="loginn">
                <span>Login</span>
              </button>
            </a>

            <p>Copyright 2023. All Rights Reserved -BigO</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
