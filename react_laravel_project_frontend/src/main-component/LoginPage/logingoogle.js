// src/components/CallbackPage.js
import React, { useEffect } from 'react';
import axios from 'axios';

function CallbackPage() {
  useEffect(() => {
    axios.get('/login/google/callback') // Make sure this URL matches your Laravel route
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Processing Google callback...</p>
    </div>
  );
}

export default CallbackPage;
