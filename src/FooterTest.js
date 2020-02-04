import React from "react";
import { Layout, Col, Row, Icon } from "antd";
import { Link } from "react-router-dom";

const Footer = Layout;

class FooterMain extends React.Component {
  render() {
    return (
      <div>
        <Footer
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#fff2e8"
          }}
        >
          <Row
            type="flex"
            justify="end"
            gutter={[8, 16]}
            style={{ marginTop: "5px" }}
          >
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: "none" }} id="li-style">
                <li>
                  <a href="">Πληροφορίες</a>
                </li>
                <li>
                  <Link to="/Help">Επικοινωνία</Link>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: "none" }} id="li-style">
                <li>
                  <a href="">Όροι χρήσης</a>
                </li>
                <li>
                  <a href="">Αξιολογήστε μας</a>
                </li>
              </ul>
            </Col>
            <Col lg={8} xs={8}>
              <ul style={{ listStyle: "none" }} id="li-style">
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Ομάδα</a>
                </li>
                <li>
                  <a href="">Στόχοι</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row type="flex" justify="start" style={{ marginTop: "-5px" }}>
            <Col span={6} push={4}>
              <p style={{ fontFamily: "cursive" }}>
                <br /> Ακολουθήστε μας!
              </p>
              <Row style={{ marginBottom: "10px" }}>
                <span
                  href=""
                  style={{ cursor: "pointer", fontSize: "24px", margin: "2px" }}
                >
                  <Icon type="facebook" theme="filled" id="icons" />
                </span>
                <span
                  href=""
                  style={{ cursor: "pointer", fontSize: "24px", margin: "2px" }}
                >
                  <Icon type="instagram" theme="filled" id="icons" />
                </span>
                <span
                  href=""
                  style={{ cursor: "pointer", fontSize: "24px", margin: "2px" }}
                >
                  <Icon type="twitter" id="icons" />
                </span>
              </Row>
            </Col>
          </Row>
          EventPark ©2019 Created with <Icon type="heart" theme="filled" /> by
          us!
        </Footer>
      </div>
    );
  }
}

export default FooterMain;
