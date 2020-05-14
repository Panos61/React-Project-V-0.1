import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  fetchAuthEvents,
  fetchEvents,
} from '../store/modules/events/actions/eventAction';
import { Card } from 'antd';

const AuthEvents = () => {
  const currentState = useSelector((state) => state.Auth);
  //const authID = currentState.currentUser.id;

  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getAuthEvents = () => dispatch(fetchEvents());

  useEffect(() => {
    getAuthEvents();
  }, []);

  // private route security
  if (!currentState.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  let authEvents = eventsSelector.authEvents.map((events) => {
    return (
      <Card title={events.message.category}>
        <div>{events}</div>
      </Card>
    );
  });

  return (
    <div>
      <div className="container">
        {authEvents.length > 0 ? (
          <div className="container">{authEvents}</div>
        ) : (
          <h2>No Events Created!</h2>
        )}
      </div>
    </div>
  );
};

export default AuthEvents;
