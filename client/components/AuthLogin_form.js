import React from 'react';

export default function AuthLogin_form() {
  return (
    <div>
      <div className="login-form">
        <div>
          <label htmlFor="email"><medium>Email: </medium></label>
          <div>
            <input name="email" type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="password"><medium>Password: </medium></label>
          <div>
            <input name="password" type="password" />
          </div>
        </div>
      </div>
    </div>
  )
}
