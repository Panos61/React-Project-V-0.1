import React, { Component } from 'react';
import { Divider, Typography } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const { Paragraph } = Typography;

class ProfileBio extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { profileData } = this.props.auth;

    return (
      <div>
        <Divider dashed />
        <Typography>
          <Paragraph>
            <p>
              {profileData
                ? `${profileData.introduction}`
                : 'Δεν υπάρχει περιγραφή.'}
              <br />
              <div>
                {profileData ? `@${profileData.name}` : '@ --'}{' '}
                {profileData ? `(${profileData.age})` : null}
              </div>
            </p>
          </Paragraph>
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProfileBio);
