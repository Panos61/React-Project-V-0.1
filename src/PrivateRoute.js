import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Spin } from 'antd';

const PrivateRoute = ({ component: Component, Auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (auth.isLoading) {
        //   return <Spin size="large" />;
        // } else
        if (!Auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  Auth: state.Auth,
});

export default connect(mapStateToProps)(PrivateRoute);
