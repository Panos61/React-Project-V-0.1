import React, { Component } from 'react';
import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Paragraph, Text } = Typography;

class Success extends Component {
  render() {
    return (
      <div>
        <Result
          status="success"
          title="Ολοκλήρωση ενέργειας!"
          subTitle="Ολοκληρώσατε την δημιουργία Event με επιτυχία!"
          extra={[
            <Button type="primary" key="console">
              <Link to="/">Αρχική Σελίδα</Link>
            </Button>,
            <Button key="edit">Επεξεργασία του Event σας</Button>,
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                Το Event που μόλις δημιουργήσατε είναι αποθηκευμένο στην βάση
                δεδομένων μας.Ισχύουν τα παρακάτω:
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined style={{ color: 'green' }} /> Το Event σας
              είναι προσβάσιμο για όλους και είναι αποθηκευμένο στο προφίλ σας!{' '}
              {''}
              <Link to="/help">Όροι και ιδιωτικότητα.</Link>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined style={{ color: 'green' }} /> {''}
              Μπορείτε να επεξεργαστείτε το Event σας. (Δεν προτείνεται πολλές
              φορές!)
            </Paragraph>
          </div>
        </Result>
      </div>
    );
  }
}

export default Success;
