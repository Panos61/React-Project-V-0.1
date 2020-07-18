import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Event from './Event';
import { fetchLocalEvents } from '../../store/modules/localEvents/actions/locationActions';
import Empty from '../empty';
import { Link, withRouter } from 'react-router-dom';

const Events = (props) => {
  const eventCity = props.match.params.id;

  const eventsSelector = useSelector((state) => state.LocalEvents);

  const dispatch = useDispatch();
  const showData = (id) => {
    dispatch(fetchLocalEvents(id));
  };

  useEffect(() => {
    showData(eventCity);
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

export default withRouter(Events);
