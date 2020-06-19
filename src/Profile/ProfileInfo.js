import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  .avatar {
    margin-left: 6.5rem;
    margin-top: 5rem;
  }
  .profile-name-handle {
    display: flex;
    flex-direction: column;
    margin-left: 1.4 rem;
    position: relative;
    top: -16px;
  }

  .profile-info {
    padding-left: 1.4rem;
    .bio {
      width: 90%;
    }
  }

  @media screen and (max-width: 635px) {
    .avatar {
      margin-left: 3rem;
      margin-top: 5rem;
    }
  }
`;

const ProfileInfo = () => {
  return (
    <Wrapper>
      <Avatar size={100} icon={<UserOutlined />} className="avatar" />
    </Wrapper>
  );
};

export default ProfileInfo;
