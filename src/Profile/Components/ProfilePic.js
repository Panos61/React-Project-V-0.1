import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const ProfilePic = () => {
  return (
    <>
      <Avatar size={144} icon={<UserOutlined />} />
    </>
  );
};

export default ProfilePic;
