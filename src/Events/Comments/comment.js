import React, { useEffect } from 'react';
import { useSelect, useDispatch } from 'react-redux';
import moment from 'react-moment';
import styled from 'styled-components';
import { Input, Form, Button } from 'antd';

const { TextArea } = Input;

// Component Style Wrapper
const Wrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`;

const EventComment = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Form>
        <Form.Item name="event_comment">
          <TextArea
            placeholder="Προσθέστε ένα σχόλιο.."
            autoSize={{ minRows: 2, maxRows: 7 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Υποβολή</Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default EventComment;
