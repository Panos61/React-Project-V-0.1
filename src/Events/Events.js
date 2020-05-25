import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import {
  fetchEvents,
  fetchAuthEvents,
} from '../store/modules/events/actions/eventAction';
import './Events.css';
import Empty from './empty';
import { Link } from 'react-router-dom';
import DataDisplay from './Layout/DataDisplay';

const { Meta } = Card;

const Events = () => {
  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  // const dataDisplayURL = id = dispatch(fetchAuthEvents(id));

  const getEvents = () => dispatch(fetchEvents());

  useEffect(() => {
    getEvents();
  }, []);

  if (eventsSelector.events.length === 0) {
    return (
      <div id="parent-notification">
        <div className="event-notification">
          <Empty />
        </div>
      </div>
    );
  }

  const events = eventsSelector.events.map((event) => (
    <>
      <Link to={'/events/' + event.id} key={event.id}>
        <Card
          key={event.id}
          title={event.title}
          style={{ marginTop: '20px' }}
          size="small"
          hoverable={true}
          className="event-card"
          cover={
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
          actions={[<CarryOutOutlined key="interested" />]}
        >
          <Meta description={event.description} />
        </Card>
      </Link>
    </>
  ));
  return <div className="events-container">{events}</div>;
};

export default Events;
