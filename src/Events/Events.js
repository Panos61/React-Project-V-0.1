import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Event from './Event';
import { fetchEvents } from '../store/modules/events/actions/eventAction';
import './Events.css';
import Empty from './empty';
import { Link } from 'react-router-dom';

const Events = () => {
  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

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

  const events = eventsSelector.events.map((event) => {
    return (
      <>
        <Link to={'/event/' + event.id} key={event.id}>
          <Event event={event} key={event.id} />
        </Link>
      </>
    );
  });
  return <div className="events-container">{events}</div>;
};

export default Events;
