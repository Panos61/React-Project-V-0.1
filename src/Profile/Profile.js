import React from "react";
import styled from "styled-components";
import Header from "../Feed/Components/Header";
import ProfileInfo from "./ProfileInfo";

const Wrapper = styled.div`
  margin-bottom: 7rem;
  .profile-top {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    span.tweetsCount {
      margin-top: 0.1rem;
      font-size: 0.9rem;
    }
  }
`;
const Profile = () => {
  return (
    <Wrapper>
      <Header>
        <div className="profile-top">
          <p>Fullname / Followers data</p>
        </div>
      </Header>
      <ProfileInfo />
    </Wrapper>
  );
};

export default Profile;
