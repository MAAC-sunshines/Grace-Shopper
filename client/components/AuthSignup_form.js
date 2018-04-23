
import React from 'react';

export default function AuthSignup_form() {
  return (
    <div className="login-form">
      <div>
        <label htmlFor="firstName"><medium>First Name: </medium></label>
        <div>
          <input name="firstName" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="lastName"><medium>Last Name: </medium></label>
        <div>
          <input name="lastName" type="text" />
        </div>
      </div>
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
  )
}



