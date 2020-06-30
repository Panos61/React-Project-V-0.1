import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import FooterMain from '../Footer';

class CityFeed extends Component {
  render() {
    return (
      <>
        <Navbar />
        <section>
          <h2>City Feed</h2>
        </section>
        <footer>
          <FooterMain />
        </footer>
      </>
    );
  }
}

export default CityFeed;
