import React from 'react';
import { Comment, Avatar } from 'antd';

const ExampleComment = ({ children }) => {
  return (
    <>
      <div style={{ width: '500px' }}>
        <Comment
          actions={[<span key="comment-nested-reply-to">Απάντηση</span>]}
          author={<a>@Anna23_</a>}
          style={{ width: '400px', marginTop: '-5px' }}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
          }
        >
          {children}
        </Comment>
      </div>
    </>
  );
};

export default ExampleComment;
