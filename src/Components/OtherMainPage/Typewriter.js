import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

class Typew extends React.Component {
  render() {
    return (
      <div>
        <Typewriter
          options={{
            strings: ['Αναζητήστε Events', 'Ακολουθήστε Events', 'Δημιουργήστε Events!'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'Typewriter__wrapper'
          }}
        />
      </div>
    );
  }
}

export default Typew;
