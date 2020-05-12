import React, { Component } from 'react';
import { Alert } from 'antd';

class Delete extends Component {
  render() {
    return (
      <div>
        <Alert
          type="warning"
          banner="true"
          message={
            <p>
              Μη αναμενόμενες ενέργειες θα συμβούν αν δεν διαβάσετε τα παρακάτω!
            </p>
          }
        />
        <h5 style={{ marginTop: '15px' }}>
          Ο λογαριασμός σας και όλο το προσωπικό/κοινοποιημένο περιεχόμενο θα
          διαγραφτούν! Τα σχόλια και οι κριτικές σας θα διαγραφτούν μαζί με τα
          Events που δημιουργήσατε!
        </h5>
      </div>
    );
  }
}

export default Delete;
