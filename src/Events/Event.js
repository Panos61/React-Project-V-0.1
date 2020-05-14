import React from 'react';
import { useSelector } from 'react-redux';

const Event = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  return (
    <div>
      {/* <div>
        <span style={{ marginTop: '5px' }}>{event.created_at}</span> <br />
        <span style={{ marginTop: '5px' }}>{event.category}</span>
        <br />
        <span style={{ marginTop: '5px' }}>{event.description}</span>
        <br />
        <span style={{ marginTop: '5px' }}>{event.comments}</span>
        <br />
      </div> */}
    </div>
  );
};

export default Event;
