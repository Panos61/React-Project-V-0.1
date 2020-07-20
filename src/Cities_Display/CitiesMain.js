import React, { Component } from 'react';
import FooterMain from '../Footer';
import './style.css';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Link, Router, Switch, Route, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const ulStyle = {
  listStyle: 'none',
};

class CitiesDisplay extends Component {
  render() {
    return (
      // <Router>
      <div>
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
                    <Link to="/location/agios-paulos">Άγιος Παύλος</Link>
                  </li>
                  <li>
                    <Link to="/location/akropoli">Ακρόπολη</Link>
                  </li>
                  <li>
                    <Link to="/location/votanikos">Βοτανικός</Link>
                  </li>
                  <li>
                    <Link to="/location/gazi">Γκάζι</Link>
                  </li>
                  <li>
                    <Link to="/location/exarheia">Εξάρχεια</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display-sub">
                  <li>
                    <Link to="/location/thiseio">Θησείο</Link>
                  </li>
                  <li>
                    <Link to="/location/ilisia">Ιλίσια</Link>
                  </li>
                  <li>
                    <Link to="/location/kolonaki">Κολωνάκι</Link>
                  </li>
                  <li>
                    <Link to="/location/monastiraki">Μοναστηράκι</Link>
                  </li>
                  <li>
                    <Link to="/location/neapoli">Νεάπολη(Αθήνα)</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display-sub">
                  <li>
                    <Link to="/location/omonoia">Ομόνοια</Link>
                  </li>
                  <li>
                    <Link to="/location/pagrati">Παγκράτι</Link>
                  </li>
                  <li>
                    <Link to="/location/patisia">Πατήσια</Link>
                  </li>
                  <li>
                    <Link to="/location/rizoupoli">Ριζούπολη</Link>
                  </li>
                  <li>
                    <Link to="/location/chalandri">Χαλάνδρι</Link>
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Other Cities */}
            <Row type="flex" justify="start" gutter={[8, 16]}>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/agios-nikolaos">Άγιος Νικόλαος</Link>
                  </li>
                  <li>
                    <Link to="/location/agrinio">Αγρίνιο</Link>
                  </li>
                  <li>
                    <Link to="/location/alexandria">Αλεξάνδρεια</Link>
                  </li>
                  <li>
                    <Link to="/location/alexandroupoli">Αλεξανδρούπολη</Link>
                  </li>
                  <li>
                    <Link to="/location/argos">Άργος</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/veria">Βέροια</Link>
                  </li>
                  <li>
                    <Link to="/location/volos">Βόλος</Link>
                  </li>
                  <li>
                    <Link to="/location/giannitsa">Γιαννιτσά</Link>
                  </li>
                  <li>
                    <Link to="/location/grevena">Γρεβενά</Link>
                  </li>
                  <li>
                    <Link to="/location/drama">Δράμα</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/edessa">Έδεσσα</Link>
                  </li>
                  <li>
                    <Link to="/location/iraklio-crete">Ηράκλειο Κρήτη</Link>
                  </li>
                  <li>
                    <Link to="/location/thessaloniki">Θεσσαλονίκη</Link>
                  </li>
                  <li>
                    <Link to="/location/ioannina">Ιωάννινα</Link>
                  </li>
                  <li>
                    <Link to="/location/kavala">Καβάλα</Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row type="flex" justify="start" gutter={[8, 16]}>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/agios-nikolaos-crete">
                      Άγιος Νικόλαος
                    </Link>
                  </li>
                  <li>
                    <Link to="/location/agrinio">Αγρίνιο</Link>
                  </li>
                  <li>
                    <Link to="/location/alexandria">Αλεξάνδρεια</Link>
                  </li>
                  <li>
                    <Link to="/location/alexandroupoli">Αλεξανδρούπολη</Link>
                  </li>
                  <li>
                    <Link to="/location/argos">Άργος</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/veria">Βέροια</Link>
                  </li>
                  <li>
                    <Link to="/location/volos">Βόλος</Link>
                  </li>
                  <li>
                    <Link to="/location/giannitsa">Γιαννιτσά</Link>
                  </li>
                  <li>
                    <Link to="/location/grevena">Γρεβενά</Link>
                  </li>
                  <li>
                    <Link to="/location/drama">Δράμα</Link>
                  </li>
                </ul>
              </Col>
              <Col lg={{ span: 3, offset: 2 }} sm={{ span: 3, offset: 2 }}>
                <ul style={ulStyle} id="cities-list-display">
                  <li>
                    <Link to="/location/edessa">Έδεσσα</Link>
                  </li>
                  <li>
                    <Link to="/location/iraklio-crete">Ηράκλειο</Link>
                  </li>
                  <li>
                    <Link to="/location/thessaloniki">Θεσσαλονίκη</Link>
                  </li>
                  <li>
                    <Link to="/location/ioannina">Ιωάννινα</Link>
                  </li>
                  <li>
                    <Link to="/location/kavala">Καβάλα</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </section>

        <footer>
          <FooterMain />
        </footer>

        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    );
  }
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default CitiesDisplay;
