import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../../store/modules/events/actions/eventAction';

const Extended = () => {
  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getEvents = () => dispatch(fetchEvents());

  useEffect(() => {
    getEvents();
  }, []);

  let events = eventsSelector.events.map((event) => {
    return (
      <div>
        <p>description</p>
        {event.description}
      </div>
    );
  });
  return <span>{events}</span>;
};

export default Extended;
