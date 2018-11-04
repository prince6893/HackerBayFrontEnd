// Import react and redux-form
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";

// Create the Signup component
let Signup = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Signup</h2>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
      <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <p>Already have and account? <br/> Click <Link to="/login">here</Link></p>
    </form>
  )
}

// Connect the Signup component to redux-form and connect it to the store.
Signup = reduxForm({
  // a unique name for the form
  form: 'signup'
})(Signup)

// Export the component
export default Signup;