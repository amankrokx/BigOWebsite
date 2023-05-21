import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";

import { EventCard } from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/events-img1.png";
import projImg2 from "../assets/img/events-img2.png";
import projImg3 from "../assets/img/events-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Events = () => {
  const events = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [activeTab, setActiveTab] = useState("first");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <section className="events" id="events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>events</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>

                  <Tab.Container
                    id="events-tabs"
                    // defaultActiveKey="first"
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Live</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Upcoming</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Past</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {activeTab === "first" && (
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme event-slider"
                          >
                            {events.map((events, index) => {
                              return <EventCard key={index} {...events} />;
                            })}
                          </Carousel>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {activeTab === "second" && (
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme event-slider"
                          >
                            {events.map((events, index) => {
                              return <EventCard key={index} {...events} />;
                            })}
                          </Carousel>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {activeTab === "third" && (
                          <Carousel
                            responsive={responsive}
                            infinite={true}
                            className="owl-carousel owl-theme event-slider"
                          >
                            {events.map((events, index) => {
                              return <EventCard key={index} {...events} />;
                            })}
                          </Carousel>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
