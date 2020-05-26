import React, { useEffect } from 'react';
import Moment from 'react-moment';
import 'moment/locale/el';
import { useSelector, useDispatch } from 'react-redux';
import { Affix, Button, Divider, BackTop, Layout } from 'antd';
import './DataLayout.css';
import { fetchEvent } from '../../store/modules/events/actions/eventAction';

import { HeartFilled } from '@ant-design/icons';
const { Footer } = Layout;

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
    <div>
      <section id="event-data-layout">
        {/* <Affix offsetTop={100}>
          <Button
            size="large"
            onClick={() => window.history.back()}
            type="primary"
          >
            Πίσω
          </Button>
        </Affix> */}

        <div className="event-container-parent">
          <div className="event-container">
            <div className="event-title">
              {event.title}{' '}
              <span style={{ fontSize: 'small' }}>{event.id}</span>
              <span style={{ float: 'right', fontSize: 'initial' }}>
                <Moment fromNow locale="el">
                  {event.created_at}
                </Moment>{' '}
                <br />
                <span style={{ fontSize: 'small' }}>{event.category}</span>
              </span>
            </div>

            <Divider />
            <div className="half-one">
              <h4>Δημιουργός:</h4>
              <div className="event-creator" style={{ marginBottom: '15px' }}>
                {event.creator ? event.creator.username : ''}
              </div>
              <h4>Περιγραφή:</h4>
              <div className="event-description">{event.description}</div>
            </div>
            {/* <div className="half-two">
              <p>content, maps..</p>
            </div> */}
          </div>
          {/* <Divider type="vertical" /> */}
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
    </div>
  );
};

export default DataDisplay;
