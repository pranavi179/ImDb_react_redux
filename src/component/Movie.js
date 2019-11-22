import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import PropTypes from "prop-types";

const { Meta } = Card;

function Movie(props) {
  let { movie } = props;

  return (
    <div>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={movie.name}
            // src={movie.picture}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={movie.name} />
        <Meta description={movie.description} />
      </Card>
    </div>
  );
}
Movie.propTypes = {
  movie: PropTypes.object.isRequired
};
export default Movie;
