import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Header from './Header';

const Wrapper = styled.div`
  margin-left: 3rem;
  width: 340px;
  border-radius: 10px;
  div:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 1230px) {
    width: 220px;
  }

  @media screen and (max-width: 1430px) {
    width: 310px;
  }

  @media screen and (max-width: 1320px) {
    width: 250px;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryColor};
  font-size: 0.9rem;
  button {
    align-self: flex-start;
  }
  .avatar-handle {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
  .handle-fullname {
    display: flex;
    flex-direction: column;
    span:first-child {
      font-weight: 500;
    }
    span.secondary {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

export const User = ({ user }) => (
  <UserWrapper>
    <div className="avatar-handle">
      <Link to={`/${user && user.handle}`}>
        <Avatar src={user && user.avatar} alt="avatar" />
      </Link>

      <div className="handle-fullname">
        <Link to={`/${user && user.handle}`}>
          <span>{user && user.fullname}</span>
        </Link>
        <span className="secondary">@{user && user.handle}</span>
      </div>
    </div>

    {user && !user.isSelf ? (
      <h4>Follow Component</h4>
    ) : (
      <Link to="/settings/profile">
        <Button sm outline className="action-btn">
          Edit Profile
        </Button>
      </Link>
    )}
  </UserWrapper>
);

const Follow = () => {
  return (
    <Wrapper>
      <Header>Who to follow</Header>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
      <p>@Anna</p>
    </Wrapper>
  );
};
export default Follow;
