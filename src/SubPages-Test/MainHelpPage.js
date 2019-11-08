import React, { Component } from 'react';
import { Input, Row, Col, Layout, Icon, Typography } from 'antd';
import './MainHelpPage.css';

/* const { Title } = Typography; */
const { Footer } = Layout;
const { Search } = Input;

class MainHelpPage extends Component {
  render() {
    return (
      <div>
        <section>
          <div className='upper-part_search'>
            <Row align='middle'>
              <Col md={{ span: 12, offset: 6 }}>
                {/* <Title level={3} style={{ color: 'whitesmoke' }}>
                  Αναζήτηση Πληροφοριών <Icon type='info-circle' />
                </Title> */}
                <div className='container' style={{ marginRight: '5%', marginLeft: '5%' }}>
                  <Search placeholder='Αναζητήστε Βοήθεια' size='medium' style={{ marginTop: '130px' }} />
                </div>
              </Col>
            </Row>
          </div>

          <div className='lower-part_content'>
            <Row type='flex' justify='end' gutter={[8, 16]}>
              <Col lg={8} xs={8}>
                Col
              </Col>
              <Col lg={8} xs={8}>
                Col
              </Col>
              <Col lg={8} xs={8}>
                Col
              </Col>
            </Row>
          </div>
        </section>

        <footer>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'unset'
            }}
          >
            EventPark ©2019 Created with <Icon type='heart' theme='filled' /> by us!
          </Footer>
        </footer>
      </div>
    );
  }
}

export default MainHelpPage;
