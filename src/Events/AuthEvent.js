import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import './AuthEvent.css';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const Wrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  border-bottom: 1px solid #fefefe;
  background-color: #fafafa;
  padding: 1rem 3.5rem 0.5rem 1rem;
  border-radius: 4px;

  .tweet-info-user {
    display: flex;
  }

  .auth-event-avatar {
    margin-right: 10px;
    display: inline-block;
  }

  .tweet-info-user span.auth-event-username {
    font-weight: 500;
  }
  .tweet-info-user span.secondary {
    padding-left: 0.5rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .auth-event-cover img {
    margin-top: 2vh;
    height: 300px;
  }

  span.tag {
    color: ${(props) => props.theme.accentColor};
    margin-right: 0.4rem;
  }
  div.auth-event-actions {
    display: flex;
    margin-top: 0.5rem;
    align-items: center;
    border-top: 1px solid #d9d9d9;
    div {
      margin-right: 4rem;
      color: ${(props) => props.theme.secondaryColor};
    }
    svg {
      margin-right: 0.5rem;
    }
    span {
      display: flex;
      align-items: center;
    }
    span.auth-event-comment {
      svg {
        position: relative;
        top: 4px;
      }
    }
  }

  button {
    background-color: teal;
    border: none;
    color: #6e6770;
    padding: 4px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  .auth-event-like {
    background-color: #fafafa;
  }

  button: hover {
    background-color: #f0f0f0;
  }

  .auth-event-comment {
    background-color: #fafafa;
  }

  .auth-event-share {
    background-color: #fafafa;
  }

  @media screen and (max-width: 690px) {
    .auth-event-cover img {
      margin-top: 2vh;
      height: 280px;
      width: 100%;
    }
  }

  @media screen and (max-width: 470px) {
    div.auth-event-actions {
      div {
        margin-right: 2.5rem;
      }
    }
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    .auth-event-username {
      display: none;
    }
    .auth-event-avatar {
      display: none;
    }
    .tweet-info-user span.secondary {
      padding-left: 0;
      padding-right: 0.7rem;
    }
  }
`;
const AuthEvent = ({ event }) => {
  const currentUserState = useSelector((state) => state);
  const authID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : '';

  return (
    <Wrapper>
      <Link to="/">
        <Avatar
          className="auth-event-avatar"
          size="large"
          icon={<UserOutlined />}
        />
      </Link>

      <div className="tweet-info">
        <div className="tweet-info-user">
          <span className="auth-event-username">Panos Orovas</span>
          <span className="secondary"> @{event.creator.username}</span>
          <span className="secondary">
            <Moment format="DD/MM HH:mm" style={{ fontWeight: 'bold' }}>
              {event.created_at}
            </Moment>
          </span>
        </div>

        <div className="auth-event-cover">
          <Link to="/">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          </Link>
        </div>
        <div className="auth-event-actions">
          <button className="auth-event-like">
            <span style={{ display: 'inline-block' }}>
              <HeartOutlined />
            </span>
            Τέλειο!
          </button>
          <button className="auth-event-comment">
            {' '}
            <span style={{ display: 'inline-block' }}>
              <CommentOutlined />
            </span>
            Σχολιάστε
          </button>
          <button className="auth-event-share">
            {' '}
            <span style={{ display: 'inline-block' }}>
              <ShareAltOutlined />
            </span>
            Κοινοποιήστε
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthEvent;
