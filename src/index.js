import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import CardRegisterStyle from './Components/RegisterForm/SignUpStyle';
//import CardLoginForm from './Components/LoginForm/LoginFormStyle';

//ReactDOM.render(<CardLoginForm />, document.getElementById('root'));
ReactDOM.render(<CardRegisterStyle />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
