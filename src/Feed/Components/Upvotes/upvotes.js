import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUpvotes,
  createUpvote,
  removeUpvote,
} from '../../../store/modules/upvotes/upvoteActions';
import history from '../../../history';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const Upvotes = ({ postID }) => {
  const currentState = useSelector((state) => state);
  const postUpvotes = currentState.Upvote;

  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  const dispatch = useDispatch();

  let postUpvote = 0;
  let upvoteID = null;
  let authUpvoted = false;

  const getPostUpvotes = (id) => dispatch(fetchUpvotes(id));
  const addUpvote = (id) => dispatch(createUpvote(id));
  const deleteUpvote = (id) => dispatch(removeUpvote(id));

  if (postUpvotes) {
    postUpvotes.upvotedPosts.map((eachItem) => {
      if (eachItem.postID === postID) {
        postUpvote = eachItem.upvotes.length;

        eachItem.upvotes.map((eachUpvote) => {
          if (eachUpvote.user_id === authID) {
            authUpvoted = true;
            upvoteID = eachUpvote.id;
          }
        });
      }
    });
  }

  useEffect(() => {
    getPostUpvotes(postID);
  }, []);

  const rmUpvote = (e) => {
    e.preventDefault();
    let id = upvoteID;
    deleteUpvote({ id, postID });
  };

  const saveUpvote = () => {
    addUpvote(postID);
  };

  const upvoteToggle = () => {
    authUpvoted ? rmUpvote() : saveUpvote();
  };

  const notAuthorized = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <>
      <div className="style-fav">
        <div className="style-heart-outer">
          <span className="mr-4">
            {authID ? (
              <span onClick={upvoteToggle}>
                {authUpvoted ? (
                  <Button icon={<HeartOutlined />}>
                    Upvoted {postUpvote}{' '}
                  </Button>
                ) : (
                  <Button icon={<HeartFilled />}>
                    Not Upvoted {postUpvote}
                  </Button>
                )}
                <span className="ml-2">{postUpvote}</span>
              </span>
            ) : (
              <span onClick={notAuthorized}>
                <Button icon={<HeartFilled />}>
                  <span className="ml-2">{postUpvote}</span>
                </Button>
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Upvotes;
