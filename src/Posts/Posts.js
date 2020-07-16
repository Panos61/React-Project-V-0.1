import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/modules/posts/postActions';
import Post from './Post';

const Posts = () => {
  const postsSelector = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  const getPosts = () => dispatch(fetchPosts());

  useEffect(() => {
    getPosts();
  }, []);

  let posts = postsSelector.posts.map((post) => {
    return (
      <div className="post-test" key={post.id}>
        {/* <Link to={'/posts/' + post.id} key={post.id}>
          <Post post={post} key={post.id} />
        </Link> */}
        <Post post={post} key={post.id} />
      </div>
    );
  });
  return <div className="container-test">{posts}</div>;
};

export default Posts;
