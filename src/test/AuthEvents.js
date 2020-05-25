import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAuthEvents } from '../store/modules/events/actions/eventAction';
import { Card } from 'antd';
import AuthEvent from './AuthEvent';

const AuthEvents = () => {
  const currentState = useSelector((state) => state.Auth);
  const authID = currentState.currentUser.id;

  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getAuthEvents = (id) => dispatch(fetchAuthEvents(id));

  useEffect(() => {
    getAuthEvents(authID);
  }, []);

  let authEvents = eventsSelector.authEvents.map((event) => {
    return (
      <Card>
        <AuthEvent event={event} key={event.id} />
      </Card>
    );
  });

  return (
    <div>
      {authEvents.length > 0 ? (
        <Card> {authEvents}</Card>
      ) : (
        <span style={{ marginTop: '30px' }}>Δημιουργήστε ένα νέο Event!</span>
      )}
    </div>
  );
};

export default AuthEvents;
