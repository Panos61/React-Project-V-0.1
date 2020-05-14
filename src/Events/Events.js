import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import { fetchEvents } from '../store/modules/events/actions/eventAction';
import Event from './Event';
import './Event.css';
import Empty from './empty';
import { Link, Redirect } from 'react-router-dom';

const { Meta } = Card;

const Events = () => {
  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getEvents = () => dispatch(fetchEvents());

  useEffect(() => {
    getEvents();
  }, []);

  let events = eventsSelector.events.map((event) => {
    return (
      <div>
        <Card
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
          {/* <Event event={event} key={event.id} /> */}
        </Card>
        )
      </div>
    );
  });

  return <span style={{ marginTop: '20px' }}>{events}</span>;
};

export default Events;
