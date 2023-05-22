import { Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";
export const EventCard = ({ title, description, link, imgUrl }) => {
  return (
    // <Col size={12} sm={6} md={4}>
    <div className="item">
      <div className="events-imgbx">
        <img src={imgUrl} />
        <div className="events-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {link && (
            <div>
              <a href={link}>
                <BoxArrowUpRight size={60} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    // </Col>
  );
};
