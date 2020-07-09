import React from 'react';
import { Tag } from 'antd';

class HotTags extends React.Component {
  render() {
    return (
      <>
        <Tag color="purple">#δημοφιλής</Tag>
        <Tag color="green">#ενδιαφέρον</Tag>
        <Tag color="volcano">#νέα</Tag>
      </>
    );
  }
}

export default HotTags;
