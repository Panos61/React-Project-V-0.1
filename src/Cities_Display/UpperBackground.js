import React from 'react';
import SearchCityFeed from './Components/Search';

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
          <h2 style={{ color: 'white' }}> Βρήκαμε 7 events </h2>
          <h5
            style={{
              color: 'rgba(245, 245, 245, 0.959)',
              margin: '0 auto',
              display: 'table',
              marginBottom: '15px',
            }}
          >
            {' '}
            για Άγιο Νικόλαο.{' '}
          </h5>
        </span>
        <div style={{ marginTop: '50px' }}>
          <SearchCityFeed />
        </div>
      </div>
    </>
  );
};

export default UpperBack;
