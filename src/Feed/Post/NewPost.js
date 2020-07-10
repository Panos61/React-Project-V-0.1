import React from 'react';
import styled from 'styled-components';
import { Button, Input, Form } from 'antd';

const { TextArea } = Input;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  border-bottom: 7px solid #ddd;

  .new-post {
    width: auto;
  }
`;

const NewPost = () => {
  return (
    <Wrapper>
      <Form.Item>
        <div className="new-post">
          <TextArea
            placeholder="Panos61, τι σκέφτεστε;"
            autoSize={{ minRows: 3 }}
            allowClear
          />
        </div>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" shape="round" size="large">
          Δημοσίευση
        </Button>
      </Form.Item>
    </Wrapper>
  );
};

export default NewPost;
