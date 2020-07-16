import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Form, Card, Divider, Avatar, Modal } from 'antd';
import './NewPostStyle.css';
import {
  UserOutlined,
  CommentOutlined,
  LinkOutlined,
  PlusCircleOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createPost } from '../../store/modules/posts/postActions';

const { TextArea } = Input;

const postStyle = {
  display: 'table',
  margin: '0 auto',
  //width: '700px',
  marginTop: '5vh',
  marginBottom: '3vh',
  borderRadius: '10px',
};

const NewPost = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();

  const addPost = (values) => {
    dispatch(createPost(values));
    console.log(values);
  };

  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="new-post-parent">
        <div className="new-post-card">
          <Card style={postStyle}>
            {/* <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{
            display: 'inline-block',
            marginRight: '10px',
          }}
        /> */}
            <div className="new-post" style={{ marginBottom: '-10px' }}>
              <Input
                placeholder="Panos61, τι σκέφτεστε;"
                onClick={() => setVisible(true)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <Divider />

            <div style={{ marginBottom: '-3%', marginTop: '-3%' }}>
              <Button
                type="text"
                icon={<LinkOutlined style={{ color: 'red' }} />}
                className="new-post-button"
              >
                Φωτογραφία/βίντεο
              </Button>
              {/* <Button
                type="text"
                icon={<CommentOutlined style={{ color: 'purple' }} />}
                className="new-post-button"
              >
                Μήνυμα
              </Button> */}
              <Link to="/create-event">
                <Button
                  type="text"
                  icon={<PlusCircleOutlined style={{ color: 'green' }} />}
                  className="new-post-button"
                >
                  Δημιουργία Event
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <Modal
        closable={true}
        visible={visible}
        title="Δημιουργία δημοσίευσης"
        footer={[
          <Button
            key="submit"
            type="primary"
            block
            onClick={() => setVisible(false)}
          >
            Δημοσίευση
          </Button>,
        ]}
      >
        <Form onFinish={addPost}>
          <Form.Item style={{ borderColor: 'white' }} name="content">
            <TextArea
              placeholder="Panos61, τι σκέφτεστε;"
              autoSize={{ minRows: 3 }}
              allowClear
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              shape="round"
              size="large"
              style={{ color: 'orange' }}
              icon={<SmileOutlined />}
            >
              Πως νιώθετε;
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;

{
  /* <Form.Item>
          <div className="new-post">
            <Input placeholder="Panos61, τι σκέφτεστε;" />
          </div>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" shape="round" size="large">
            Δημοσίευση
          </Button>
        </Form.Item> */
}
