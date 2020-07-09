import React, { useEffect } from 'react';
import Moment from 'react-moment';
import 'moment/locale/el';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { Affix, Button, Divider, BackTop, Layout, Collapse } from 'antd';
import './DataLayout.css';
import { fetchEvent } from '../../store/modules/events/actions/eventAction';
import {
  HeartFilled,
  ArrowLeftOutlined,
  EnvironmentOutlined,
  RiseOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Panel } = Collapse;

const DataDisplay = (props) => {
  const eventID = props.match.params.id;

  const dispatch = useDispatch();
  const singleEvent = (id) => dispatch(fetchEvent(id));

  const currentState = useSelector((state) => state);

  const event = currentState.Event.event;

  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  useEffect(() => {
    singleEvent(eventID);
  }, []);

  return (
    <>
      <section id="event-data-layout">
        <Affix offsetTop={12}>
          <Button
            size="medium"
            onClick={() => window.history.back()}
            type="dashed"
            icon={<ArrowLeftOutlined />}
          >
            Πίσω
          </Button>
        </Affix>

        <div className="event-container-parent">
          <div className="event-container">
            <div className="event-title">
              {event.title}{' '}
              <span style={{ fontSize: 'small' }}>{event.id}</span>
              {'   '}
              <RiseOutlined style={{ color: '#722ed1' }} />
              <span style={{ float: 'right', fontSize: 'initial' }}>
                <Moment fromNow locale="el">
                  {event.created_at}
                </Moment>{' '}
                <br />
                <span style={{ fontSize: 'small', color: '#237804' }}>
                  {event.category}
                </span>
              </span>
            </div>

            <Divider />

            <div className="event-date">
              <h4>Ημερομηνία:</h4>
              {/* <span>{event.singleTime}</span> */}
              <Moment format="YYYY/MM/DD HH:mm">{event.singleTime}</Moment>
            </div>

            {/*EVENT INTERACTIVITY */}
            <div className="event-interactivity">
              Ακολούθηση {'   '} <BellOutlined />
            </div>

            <h4>Δημιουργός:</h4>
            <div className="event-creator" style={{ marginBottom: '15px' }}>
              {event.creator ? event.creator.username : ''}
            </div>

            <h4>Περιοχή:</h4>
            <div
              className="event-location-simple"
              style={{ marginBottom: '15px' }}
            >
              {event.city}, {event.address} <br /> <u>Στη τοποθεσία</u>:{' '}
              {event.place}
              <u style={{ marginLeft: '10px', color: '#d4b106' }}>
                Βρείτε στον χάρτη! {'   '} <EnvironmentOutlined />
              </u>
            </div>

            <div className="event-payment">
              <h4>Είσοδος:</h4>
              Δωρεάν
            </div>

            {/* <h4>Χώρος:</h4>
            <div
              className="event-place-simple"
              style={{ marginBottom: "15px" }}
            >
              EightBall
            </div> */}

            <h4>Περιγραφή:</h4>
            <div className="event-description">{event.description}</div>

            <Divider />
            <h4>Πολυμέσα:</h4>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={event.urlYoutube}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>

            <Collapse bordered={false} style={{ marginTop: '25px' }}>
              <Panel header={<h3>Λοιπές Πληροφορίες</h3>}>
                <h4>Σχόλια Δημιουργού:</h4>
                {event.comments ? event.comments : 'Κανένα σχόλιο.'} <br />
                {event.ageRestricted ? event.ageRestricted : ''}
              </Panel>
            </Collapse>
          </div>
        </div>
        <BackTop />
      </section>

      <footer>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'unset',
          }}
        >
          EventPark ©2020 Created with <HeartFilled /> by us!
        </Footer>
      </footer>
    </>
  );
};

export default DataDisplay;
