import React from "react";
import styled from "styled-components";
import { Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  .avatar {
    margin-left: 6.5rem;
    margin-top: 5rem;
  }

  .profile-info {
    padding-left: 1.4rem;
    .bio {
      width: 90%;
    }
  }

  .profile-name-handle {
    display: flex;
    flex-direction: column;
    margin-left: 3.6rem;
    position: relative;
    top: 15px;
  }

  span.fullname {
    font-weight: bold;
    font-size: 16px;
  }

  span {
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 635px) {
    .avatar {
      margin-left: 3rem;
      margin-top: 5rem;
    }
    span {
      margin-bottom: 0.7rem;
    }
  }
`;

const ProfileInfo = () => {
  return (
    <Wrapper>
      <Avatar size={100} icon={<UserOutlined />} className="avatar" />
      <div className="profile-name-handle">
        <span className="fullname">fullname</span>
        <span className="handle">@handle</span>
      </div>
      <Divider />
    </Wrapper>
  );
};

export default ProfileInfo;
