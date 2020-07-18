import React from 'react'
import propTypes from 'prop-types'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handeSubmit = (event) => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target

    /* dynamically sets the property value to be able to use same function for both email and pw */
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handeSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <label>Password</label>
          <input type="submit" name="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

SignIn.propTypes = {
  email: propTypes.string,
  password: propTypes.string,
}

export default SignIn
