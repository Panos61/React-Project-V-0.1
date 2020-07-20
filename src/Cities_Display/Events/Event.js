import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Divider, Button } from 'antd';
import { CarryOutOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Moment from 'react-moment';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  const Wrapper = styled.div`
    margin-top: 7vh;
    width: 90vh;

    .local-event-title {
      font-size: 20px;
      font-family: cursive;
    }
    .local-event-title:hover {
      text-decoration: underline;
    }

    .local-event-creator {
      float: right;
      margin-top: '10px';
    }

    .local-event-time {
      float: right;
    }

    @media only screen and (max-width: 420px) {
      button {
        display: none;
      }
    }

    @media screen and (max-width: 1270px) {
      width: 100%;
      display: table;
      margin: 0 auto;
      margin-top: 2.5vh;
    }

    @media only screen and (min-width: 1201px) and (max-width: 1280px) {
      margin-left: 2vh;
    }
  `;

  return (
    <Wrapper>
      <Card
        style={{ marginBottom: '5vh', borderRadius: '5px' }}
        key={event.id}
        hoverable={true}
        style={{ cursor: 'default' }}
      >
        <span className="local-event-title">
          <Link
            to={'/event/' + event.id}
            key={event.id}
            style={{ color: '#d4380d' }}
          >
            {event.title}
          </Link>
        </span>
        <span className="local-event-time">
          <Moment format="YYYY/MM/DD HH:mm a" style={{ fontWeight: 'bold' }}>
            {event.singleTime}
          </Moment>
        </span>
        <Divider />
        {/* LEFT SIDE */}
        <span>{event.place}</span>
        {'  '}-{'  '}
        <span>{event.address}</span> <br />
        <span>Πληρωμή-[placeholder]</span>
        {/* RIGHT SIDE */}
        <Link to={'/event/' + event.id} key={event.id}>
          <Button
            icon={<ArrowRightOutlined />}
            shape="round"
            style={{
              float: 'right',
              color: 'orange',
              position: 'relative',
            }}
          >
            Μετάβαση
          </Button>
        </Link>
        <br />
        <br />
        <span className="local-event-creator">Δημιουργός: [placeholder]</span>
        {/* <span>{event.creator.username}</span> */}
      </Card>
    </Wrapper>
  );
};

export default Event;
