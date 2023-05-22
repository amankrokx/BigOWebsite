import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header1.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Competative Coding Club", "Developers Club"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    Welcome to <span className="tagline">BigO</span>
                  </h2>

                  <h1>
                    {`The`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="500"
                      data-rotate='[ "Competative Coding Club", "Developers Club" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>{" "}
                    {"of RNSIT "}
                  </h1>
                  <p>
                    Welcome to BigO, the premier competitive programming club of
                    RNSIT (R. N. Shetty Institute of Technology). With a passion
                    for coding and a drive for excellence, BigO has established
                    itself as a prominent platform for aspiring programmers. Our
                    vibrant community fosters a spirit of collaboration and
                    innovation, where members come together to participate in
                    thrilling coding contests, engage in insightful workshops,
                    and delve into enlightening technical talks. Whether you are
                    a beginner taking your first steps in the world of
                    programming or an experienced coder seeking to sharpen your
                    skills, BigO provides the ideal environment to grow, learn,
                    and excel. Join us on this exhilarating journey of coding
                    prowess and unlock your true potential with BigO.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
