import React from 'react';
import { Affix, Button } from 'antd';
import './DataLayout.css';

const DataDisplay = () => {
  return (
    <>
      <section id="event-data-layout">
        <Affix offsetTop={110}>
          <Button
            size="large"
            onClick={() => window.history.back()}
            type="primary"
          >
            Πίσω
          </Button>
        </Affix>

        <h2>data</h2>
      </section>
    </>
  );
};

export default DataDisplay;
