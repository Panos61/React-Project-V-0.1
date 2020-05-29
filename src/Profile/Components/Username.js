import React, { Component } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const { Title } = Typography;

class Username extends Component {
  static propTypes = {
    Auth: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props.Auth;

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
  Auth: state.Auth,
});

export default connect(mapStateToProps, null)(Username);
