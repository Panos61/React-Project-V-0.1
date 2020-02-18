import React, { Component } from 'react';
import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;

class ProfileBio extends React.Component {
  render() {
    return (
      <div>
        <Divider dashed />
        <Typography>
          <Paragraph>
            <p>
              I love travelling around the world 🗺️ and playing music 🎸Welcome
              to my Profile!
              <br />
              @panoss_
            </p>
          </Paragraph>
        </Typography>
      </div>
    );
  }
}

export default ProfileBio;
