import React, { useState } from 'react';
import './Login.css';
import Form from '../components/Form';

const Login = () => {
  return (
    <div style={{width: 600, margin: 'auto', marginTop: 40}}>
      <h3>Login</h3>
      <Form/>
    </div>
  );
};

export default Login;