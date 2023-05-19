import { Col } from "react-bootstrap";

export const MemberCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={5} md={2}>
      <div className="mem-imgbx">
        <img src={imgUrl} />
        <div className="mem-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
