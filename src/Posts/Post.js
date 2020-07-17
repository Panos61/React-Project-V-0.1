import React, { useState } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Avatar, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import {
  UserOutlined,
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
  DashOutlined,
} from '@ant-design/icons';
import Upvotes from '../Feed/Components/Upvotes/upvotes';
import Profile from '../Profile/Profile';
import ExampleComment from '../Feed/Components/Comments/comment';
import Editor from '../Feed/Components/Comments/createComment';

const Wrapper = styled.div`

  .tweet-info-user {
    display: flex;
  }
  .auth-event-avatar {
    margin-right: 20px;
    display: inline;
  }
  .tweet-info-user span.auth-event-username {
    font-weight: 500;
  }
  .auth-event-cover img {
    margin-top: 2vh;
    height: 300px;
  }

  .post-content {
      margin-top: 2vh;
      max-width: 55vh;
  }

  span.tag {
    color: ${(props) => props.theme.accentColor};
    margin-right: 0.4rem;
  }
  .auth-event-actions {
    margin-top: -2.5vh;
    
  }
  .auth-event-like-stats {
    float: left;
  }
  
  .auth-event-share-stats {
    float: right;
  }

  .auth-event-comment-stats {
    float: right;
    right: 15%;
    position: relative;
  }


  button {
    border: none;
    color: #5f5f5f;
    padding: 4px 28px;
    text-align: center;
    align-content: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    margin-left: 2vh;
    cursor: pointer;
  }
  button: hover {
    background-color: #f0f0f0;
    cursor: pointer;
    color: #5f5f5f;
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
    button {
      padding: 4px 1px;
      }
      
  }
  @media screen and (max-width: 440px) {
    flex-direction: column;
    .auth-event-username {
      display: none;
    }
  
    .tweet-info-user span.secondary {
      padding-left: 0;
      padding-right: 0.7rem;
    }

  .auth-event-comment-stats {
    float: right;
    right: 20%;
    position: relative;
    }

    
  }

   @media screen and (max-width: 515px) {
      .auth-event-avatar {
        display: none;
      }
    }

  }
`;

const Post = ({ post }) => {
  const [visibleInput, setVisibleInput] = useState(false);

  const currentUserState = useSelector((state) => state.Auth);
  const PostsState = useSelector((state) => state);
  const authID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : '';

  return (
    <>
      <Wrapper>
        <Card style={{ marginBottom: '5vh', borderRadius: '10px' }}>
          <div className="tweet-info">
            <div className="tweet-info-user">
              <Avatar
                className="auth-event-avatar"
                size="large"
                icon={<UserOutlined />}
                style={{
                  // display: 'inline-block',
                  marginRight: '10px',
                }}
              />

              <span className="auth-event-username">
                Panos Orovas{' '}
                <span className="secondary" style={{ display: 'flex' }}>
                  <Moment
                    //format={'dddd στις h:mm a'}
                    fromNow
                    style={{ fontWeight: '350' }}
                  >
                    {post.created_at}
                  </Moment>
                </span>
              </span>

              <span className="secondary" style={{ marginLeft: '5px' }}>
                {' '}
                @{post.author.username}
              </span>

              {authID === post.author_id ? (
                <span
                  style={{
                    position: 'absolute',
                    right: '2.5vh',
                    cursor: 'pointer',
                  }}
                >
                  <DashOutlined />
                </span>
              ) : null}
            </div>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
          </div>

          {/* USER ACTION STATS */}
          <div
            className="auth-event-user-stats"
            style={{ margin: '1%', marginBottom: '40px' }}
          >
            <span className="auth-event-like-stats">
              <HeartOutlined />
            </span>
            <span className="auth-event-comment-stats">
              2 <CommentOutlined />
            </span>
            <span className="auth-event-share-stats">
              1 <ShareAltOutlined />
            </span>
          </div>
          <Divider />

          {/* USER ACTIONS */}
          <div className="auth-event-actions">
            <Button type="text" icon={<HeartOutlined />}>
              Τέλειο
            </Button>
            {/* <Upvotes postID={post.id} /> */}
            <Button
              type="text"
              icon={<CommentOutlined />}
              onClick={() => setVisibleInput(true)}
            >
              Σχόλιο
            </Button>
            <Button type="text" icon={<ShareAltOutlined />}>
              Προώθηση
            </Button>
          </div>
          {/* Test Comments*/}
          {/* <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment> */}
        </Card>
      </Wrapper>
    </>
  );
};

export default Post;
