import React from 'react';
import SearchCityFeed from './Search';

const UpperBack = () => {
  return (
    <>
      <div
        className="city-feed-background"
        style={{
          zIndex: '-5',
          top: 0,
          padding: '45px',

          width: '100%',
        }}
      >
        <span
          style={{
            margin: '0 auto',
            display: 'table',
            color: 'white',
            fontSize: '24px',
            marginTop: '30px',
          }}
        >
          <h4 style={{ color: 'white' }}> Βρήκαμε 7 events </h4>
          <h6
            style={{
              color: 'rgba(245, 245, 245, 0.959)',
              margin: '0 auto',
              display: 'table',
              marginBottom: '15px',
            }}
          >
            {' '}
            για Άγιο Νικόλαο.{' '}
          </h6>
        </span>
        <div style={{ marginTop: '50px' }}>
          <SearchCityFeed />
        </div>
      </div>
    </>
  );
};

export default UpperBack;
