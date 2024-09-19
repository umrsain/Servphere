import * as React from 'react';



export const EmailTemplate = ({
  firstName,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <h1>You have just recieved a new order</h1>
  </div>
);
