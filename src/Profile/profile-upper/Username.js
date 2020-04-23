import React, { Component } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const { Title } = Typography;

class Username extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Title
          level={2}
          style={{
            fontFamily: 'Georgia',
            fontWeight: 'initial',
          }}
        >
          <span>{user ? `${user.username}` : null}</span>
        </Title>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Username);
