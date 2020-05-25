import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const AuthEvent = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser.id;

  return (
    <div>
      <Card title={event.creator.username}>
        <span>{event.created_at}</span>
        <span>{event.title}</span>
        <span>{event.category}</span>
        <div className="container" style={{ marginTop: '15px' }}>
          {authID ? <p>{event.id}</p> : ''}
        </div>
      </Card>
    </div>
  );
};

export default AuthEvent;
