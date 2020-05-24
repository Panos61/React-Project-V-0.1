import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Modal, Button } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import { fetchEvents } from '../store/modules/events/actions/eventAction';
import { Row, Col } from 'react-flexbox-grid';
import './Events.css';
import Empty from './empty';
import Extended from './Event-Layout/extended';
import { Fragment } from 'react';

const { Meta } = Card;

const Events = () => {
  const [visible, setVisible] = useState(false);

  const eventsSelector = useSelector((state) => state.Event);
  const dispatch = useDispatch();

  const getEvents = () => dispatch(fetchEvents());

  useEffect(() => {
    getEvents();
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

  const events = eventsSelector.events.map((event) => (
    <>
      <Card
        onClick={() => setVisible(true)}
        title={event.title}
        style={{ marginTop: '20px' }}
        size="small"
        hoverable={true}
        className="event-card"
        cover={
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        }
        actions={[<CarryOutOutlined key="interested" />]}
      >
        <Meta description={event.description} />
      </Card>

      <Modal
        style={{ top: 25 }}
        closable={true}
        visible={visible}
        title={event.title}
        footer={[
          <Button key="submit" type="dashed" onClick={() => setVisible(false)}>
            Πίσω
          </Button>,
        ]}
      >
        <Extended />
      </Modal>
    </>
  ));
  return <div className="events-container">{events}</div>;
};

export default Events;
