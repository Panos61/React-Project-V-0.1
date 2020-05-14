import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card } from 'antd';

const AuthEvent = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser.id;

  return <Card title={event.id}>{event}</Card>;
};

export default AuthEvent;
