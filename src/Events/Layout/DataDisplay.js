import React from 'react';
import { useSelector } from 'react-redux';
import { Affix, Button } from 'antd';
import './DataLayout.css';

const DataDisplay = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  return (
    <>
      <section id="event-data-layout">
        <Affix offsetTop={100}>
          <Button
            size="large"
            onClick={() => window.history.back()}
            type="primary"
          >
            Πίσω
          </Button>
        </Affix>

        <span>{event.title}</span>
      </section>
    </>
  );
};

export default DataDisplay;
