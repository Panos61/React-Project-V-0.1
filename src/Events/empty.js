import React from 'react';
import { Empty, Button } from 'antd';
import { Link } from 'react-router-dom';

const empty = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: 'whitesmoke' }}>
      <Empty
        description={
          <span>Δεν υπάρχουν Events ή έχουν λήξει τα όσα υπάρχοντα!</span>
        }
      >
        <Button type="primary">
          <Link to="/create-event">Δημιουργήστε το πρώτο Event!</Link>
        </Button>{' '}
      </Empty>
    </div>
  );
};

export default empty;
