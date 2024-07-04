import React, { useState } from 'react';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => {
    setUserName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userObj = {
      user: userName,
      emailId: email,
      password: password,
    };
    console.log(userObj);
  };

  return (
    <center>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={userName}
              onChange={changeUsername}
            />
          </div>
          <div className="content">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Emailid"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="content">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={changePassword}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </center>
  );
};

export default Form;
