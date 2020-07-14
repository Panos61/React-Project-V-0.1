import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AuthEvent from './AuthEvent';

import { fetchAuthEvents } from '../store/modules/events/actions/eventAction';

const AuthEvents = () => {
  const currentUserState = useSelector((state) => state.Auth);
  const authID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : '';

  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getAuthEvents = (id) => dispatch(fetchAuthEvents(id));

  useEffect(() => {
    getAuthEvents(authID);
  }, []);

  let authEvents = eventsSelector.authEvents.map((event) => {
    return (
      <div className="mt-2 style-card" key={event.id}>
        {/* <Link to={'/event/' + event.id} key={event.id}>
          <AuthEvent event={event} key={event.id} />
        </Link> */}
        <AuthEvent event={event} key={event.id} />
      </div>
    );
  });

  return (
    <div>
      <div style={{ display: 'table', margin: '0 auto' }}>
        {authEvents.length > 0 ? (
          <div className="auth-event-container-test">{authEvents}</div>
        ) : (
          <div>
            <p className="test-aut">No events yet.</p>
            <p>Click the button the button below to create one</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthEvents;
