import React, { Component } from 'react';
import FooterMain from '../Footer';
import './style.css';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const ulStyle = {
  listStyle: 'none',
};

class CitiesDisplay extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="locations-display-section">
          <div style={{ marginTop: '15vh' }}>
            <Row type="flex" justify="center">
              <Col lg={{ span: 12, offset: 1 }}>
                <Title
                  level={2}
                  style={{ marginBottom: '60px', color: 'whitesmoke' }}
                >
                  Events σε πάνω απο 60 περιοχές της Ελλάδας{' '}
                  <EnvironmentOutlined />
                </Title>
              </Col>
            </Row>
            {/* Athens locations */}
            <Row>
              <Col lg={{ span: 9, offset: 4 }} xs={{ span: 10, offset: 5 }}>
                <h3 style={{ marginBottom: '30px', color: 'white' }}>
                  Αττική/Κέντρο
                </h3>
              </Col>
            </Row>

            <Row type="flex" justify="start" gutter={[8, 16]}>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display-sub">
                  <li>
                    <Link to="/">Άγιος Παύλος</Link>
                  </li>
                  <li>
                    <Link to="/">Ακρόπολη</Link>
                  </li>
                  <li>
                    <Link to="/">Βοτανικός</Link>
                  </li>
                  <li>
                    <Link to="/">Γκάζι</Link>
                  </li>
                  <li>
                    <Link to="/">Εξάρχεια</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display-sub">
                  <li>
                    <Link to="/">Θησείο</Link>
                  </li>
                  <li>
                    <Link to="/">Ιλίσια</Link>
                  </li>
                  <li>
                    <Link to="/">Κολωνάκι</Link>
                  </li>
                  <li>
                    <Link to="/">Μοναστηράκι</Link>
                  </li>
                  <li>
                    <Link to="/">Νεάπολη(Αθήνα)</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display-sub">
                  <li>
                    <Link to="/">Ομόνοια</Link>
                  </li>
                  <li>
                    <Link to="/">Παγκράτι</Link>
                  </li>
                  <li>
                    <Link to="/">Πατήσια</Link>
                  </li>
                  <li>
                    <Link to="/">Ριζούπολη</Link>
                  </li>
                  <li>
                    <Link to="/">Χαλάνδρι</Link>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Other Cities */}
            <Row type="flex" justify="start" gutter={[8, 16]}>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/events/city">Άγιος Νικόλαος</Link>
                  </li>
                  <li>
                    <Link to="/">Αγρίνιο</Link>
                  </li>
                  <li>
                    <Link to="/">Αλεξάνδρεια</Link>
                  </li>
                  <li>
                    <Link to="/">Αλεξανδρούπολη</Link>
                  </li>
                  <li>
                    <Link to="/">Άργος</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/">Βέροια</Link>
                  </li>
                  <li>
                    <Link to="/">Βόλος</Link>
                  </li>
                  <li>
                    <Link to="/">Γιαννιτσά</Link>
                  </li>
                  <li>
                    <Link to="/">Γρεβενά</Link>
                  </li>
                  <li>
                    <Link to="/">Δράμα</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/">Έδεσσα</Link>
                  </li>
                  <li>
                    <Link to="/">Ηράκλειο</Link>
                  </li>
                  <li>
                    <Link to="/">Θεσσαλονίκη</Link>
                  </li>
                  <li>
                    <Link to="/">Ιωάννινα</Link>
                  </li>
                  <li>
                    <Link to="/">Καβάλα</Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row type="flex" justify="start" gutter={[8, 16]}>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/">Άγιος Νικόλαος</Link>
                  </li>
                  <li>
                    <Link to="/">Αγρίνιο</Link>
                  </li>
                  <li>
                    <Link to="/">Αλεξάνδρεια</Link>
                  </li>
                  <li>
                    <Link to="/">Αλεξανδρούπολη</Link>
                  </li>
                  <li>
                    <Link to="/">Άργος</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/">Βέροια</Link>
                  </li>
                  <li>
                    <Link to="/">Βόλος</Link>
                  </li>
                  <li>
                    <Link to="/">Γιαννιτσά</Link>
                  </li>
                  <li>
                    <Link to="/">Γρεβενά</Link>
                  </li>
                  <li>
                    <Link to="/">Δράμα</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/">Έδεσσα</Link>
                  </li>
                  <li>
                    <Link to="/">Ηράκλειο</Link>
                  </li>
                  <li>
                    <Link to="/">Θεσσαλονίκη</Link>
                  </li>
                  <li>
                    <Link to="/">Ιωάννινα</Link>
                  </li>
                  <li>
                    <Link to="/">Καβάλα</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </section>

        <footer>
          <FooterMain />
        </footer>
      </>
    );
  }
}

export default CitiesDisplay;
