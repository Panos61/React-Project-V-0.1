import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import Moment from 'react-moment';

const { Meta } = Card;

const Event = ({ event }) => {
  const currentState = useSelector((state) => state);
  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  return (
    <Card
      className="event-card"
      key={event.id}
      title={event.title}
      style={{ marginTop: '20px', width: '3500' }}
      size="small"
      hoverable={true}
      //   cover={
      //     <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
      //   }
      actions={[<CarryOutOutlined key="interested" />]}
    >
      {/* <Meta
        description={
          <Moment format="YYYY/MM/DD HH:mm" style={{ fontWeight: 'bold' }}>
            {event.singleTime}
          </Moment>
        }
      /> */}

      <span>
        {event.singleTime} <br /> {event.title}
      </span>
    </Card>
  );
};

export default Event;
