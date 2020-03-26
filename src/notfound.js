import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="Σφάλμα 404"
          subTitle="Ουπς! H σελίδα που ζητήσατε δεν υπάρχει!"
          extra={
            <Button type="primary">
              <Link to="/" style={{ color: 'white' }}>
                Αρχική Σελίδα
              </Link>
            </Button>
          }
        />
      </div>
    );
  }
}

export default NotFound;
