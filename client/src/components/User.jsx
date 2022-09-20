import React, { useState, useEffect } from 'react';

const CONSTANTS = {
  URL: 'http://localhost:5500/user/getUser',
};

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // let isCancelled = false;

    // const controller = new AbortController();
    // const signal = controller.signal;

    async function getUser(URL) {
      const res = await fetch(URL);
      const userObj = await res.json();
      console.log(userObj);
      setUser(userObj.data);
    }

    // if (!isCancelled)
    getUser(CONSTANTS.URL);

    return () => {
      //you can cancel the fetch request here!
      // isCancelled = false;
      //   controller.abort();
      console.warn('Request cancelled!');
    };
  }, []);

  return (
    <div>
      <h1>User</h1>
      <p>Hello, {user.name}</p>
      <p> {user.designation}</p>
      <p> {user.salary}</p>
    </div>
  );
};

export default User;
