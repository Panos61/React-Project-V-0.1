import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUpvotes,
  createUpvote,
  removeUpvote,
} from '../../../store/modules/upvotes/upvoteActions';
import history from '../../../history';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const Upvotes = ({ postID }) => {
  const currentState = useSelector((state) => state);
  const postUpvotes = currentState.Upvote;

  const authID = currentState.Auth.currentUser
    ? currentState.Auth.currentUser.id
    : '';

  const dispatch = useDispatch();

  let postUpvote = 0;
  let upvoteID = null;
  let authLinked = false;

  const getPostUpvotes = (id) => dispatch(fetchUpvotes(id));
  const addUpvote = (id) => dispatch(createUpvote(id));
  const deleteUpvote = (id) => dispatch(removeUpvote(id));

  if (postUpvotes) {
    postUpvotes.upvotedPosts.map((eachItem) => {
      if (eachItem.postID === postID) {
        postUpvote = eachItem.upvotes.length;

        eachItem.upvotes.map((eachUpvote) => {
          if (eachUpvote.user_id === authID) {
            authLinked = true;
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

  const saveUpvote = (e) => {
    e.preventDefault();
    addUpvote(postID);
  };

  const upvoteToggle = (e) => {
    e.preventDefault();
    authLinked ? rmUpvote(e) : saveUpvote(e);
  };

  const notAuthorized = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <>
      {authID ? (
        <span onClick={upvoteToggle}>
          <Button type="text" icon={<HeartOutlined />}>
            Τέλειο <span>{postUpvote}</span>
          </Button>
        </span>
      ) : (
        ''
      )}
    </>
  );
};

export default Upvotes;
