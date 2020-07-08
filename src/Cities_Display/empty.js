import React from 'react';
import { Empty, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const empty = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card>
        <Empty
          description={
            <span>
              Δεν υπάρχουν Events ή έχουν λήξει τα όσα υπάρχοντα στην περιοχή :(
            </span>
          }
        >
          <Button type="primary">
            <Link to="/create-event">Δημιουργήστε το πρώτο Event!</Link>
          </Button>{' '}
        </Empty>
      </Card>
    </div>
  );
};

export default empty;
