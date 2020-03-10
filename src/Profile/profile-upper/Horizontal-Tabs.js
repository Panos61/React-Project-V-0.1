import React, { Component } from 'react';
import { FireOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';

const { TabPane } = Tabs;

const operations = (
  <Button style={{ marginLeft: '5vh', color: '#7cb305' }}>
    <Link to="/">EventPark</Link>
  </Button>
);

class HorizontalTabs extends Component {
  render() {
    return (
      <div>
        <Tabs tabBarExtraContent={operations} size="default">
          <TabPane
            tab={
              <span>
                <FireOutlined />
                Activity
              </span>
            }
            key="1"
          >
            Περιεχόμενο 1..
            <br />
            .
            <br />
            .
            <br />
            .
            <br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />.
          </TabPane>
          <TabPane
            tab={
              <span>
                <ShareAltOutlined />
                Share
              </span>
            }
            key="2"
          >
            Περιεχόμενο 2..
            <br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />.
          </TabPane>
          {/* <TabPane tab="Events" key="3">
            Content of tab 3
            <br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />.
          </TabPane> */}
        </Tabs>
      </div>
    );
  }
}

export default HorizontalTabs;
