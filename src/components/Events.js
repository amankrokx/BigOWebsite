import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";

import { EventCard } from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//past
import eveImg1 from "../assets/imgs/events/past/1.jpg";
import eveImg2 from "../assets/imgs/events/past/2.jpg";
import eveImg3 from "../assets/imgs/events/past/3.jpg";
import eveImg4 from "../assets/imgs/events/past/4.jpg";
import eveImg5 from "../assets/imgs/events/past/5.jpeg";
import eveImg6 from "../assets/imgs/events/past/6.jpeg";
import eveImg7 from "../assets/imgs/events/past/7.jpeg";
import eveImg8 from "../assets/imgs/events/past/8.jpeg";
import eveImg9 from "../assets/imgs/events/past/9.jpg";
import eveImg10 from "../assets/imgs/events/past/10.jpg";
import eveImg11 from "../assets/imgs/events/past/11.jpg";
import eveImg12 from "../assets/imgs/events/past/12.jpeg";
import eveImg13 from "../assets/imgs/events/past/13.jpg";
import eveImg14 from "../assets/imgs/events/past/14.jpeg";
import eveImg15 from "../assets/imgs/events/past/15.jpeg";

//live
import emptyImg from "../assets/imgs/events/live/empty.png";

//upcoming

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Events = () => {
  const eventslive = [
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
  ];
  const eventsupcoming = [
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
    {
      title: "Nope nothing here for now",
      description: "Touch grass, watch a movie...maybe finally..",
      imgUrl: emptyImg,
    },
  ];
  const eventspast = [
    {
      title: "Typing Contest",
      description: "21st May, 2023",
      imgUrl: eveImg14,
    },
    {
      title: "Strategic Plans for Placement & Internships Talk",
      description: "27th December, 2022",
      imgUrl: eveImg13,
    },
    {
      title: "Great Coding Challenge 3.0",
      description: "9th December, 2022",
      link: "https://www.hackerrank.com/great-coding-challenge-3-0",
      imgUrl: eveImg12,
    },
    {
      title: "Session on Git and GitHub",
      description: "24th November, 2022",
      imgUrl: eveImg11,
    },
    {
      title: "Session on Competitive Programming",
      description: "9th November,2022",
      imgUrl: eveImg10,
    },
    {
      title: "Algowin 1.0",
      description: "5th November,2022",
      link: "https://www.hackerrank.com/algowin-1-0",
      imgUrl: eveImg9,
    },
    {
      title: "Recruiting",
      description: "11th July,2022",
      link: "https://www.hackerrank.com/gcc2",
      imgUrl: eveImg8,
    },
    {
      title: "Team Programming Contest 3.0",
      description: "10th June,2022",
      link: "https://www.hackerrank.com/team-programming-contest-3-0",
      imgUrl: eveImg7,
    },
    {
      title: "Code Wiser",
      description: "5th April,2022",
      link: "https://www.hackerrank.com/code-wiser",
      imgUrl: eveImg6,
    },
    {
      title: "Recruiting-non-tech",
      description: "5th November,2022",
      imgUrl: eveImg5,
    },
    {
      title: "Team Programming Contest 2.0",
      description: "16th December,2021",
      link: "https://www.hackerrank.com/tpc-2-0-sem-3",
      imgUrl: eveImg4,
    },
    {
      title: "Team Programming Contest 1.0",
      description: "30th October,2021",
      link: "https://www.hackerrank.com/team-programming-contest-1-0",
      imgUrl: eveImg15,
    },
    {
      title: "Great Coding Challenge",
      description: "1st September,2021",
      link: "http://www.hackerrank.com/great-coding-challenge-gcc",
      imgUrl: eveImg3,
    },
    {
      title: "Competitive Programming 101",
      description: "24th August,2021",
      imgUrl: eveImg2,
    },
    {
      title: "Github101",
      description: "23rd August,2021",
      imgUrl: eveImg1,
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
      <p style={{ color: "black" }}>Aman, Ajit, Sinchana</p>
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
                    Discover a world of exciting events with BigO! We pride
                    ourselves on organizing a diverse range of programming
                    competitions, workshops, and technical talks that cater to
                    all skill levels and interests. Our coding contests are
                    designed to challenge and inspire participants, providing an
                    opportunity to showcase their problem-solving abilities and
                    compete against top talent. Join our workshops to learn
                    valuable coding techniques, get an insight on various
                    technical skills. Additionally, our engaging technical talks
                    offer a platform to delve into cutting-edge technologies and
                    trends, allowing you to expand your knowledge and stay ahead
                    in the ever-evolving world of programming. Stay tuned for
                    our upcoming events and be a part of the thrilling BigO
                    experience!
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
                            {eventslive.map((events, index) => {
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
                            {eventsupcoming.map((events, index) => {
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
                            {eventspast.map((events, index) => {
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
      <p style={{ color: "black" }}>AUB&SAM</p>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
