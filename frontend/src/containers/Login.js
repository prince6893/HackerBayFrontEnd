import { Link,Redirect } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Loader from 'react-loader';
import {createActionThunk} from "../actions/thunkAction";
class Login extends React.PureComponent{
  
  constructor(props){
    super(props);
    this.login=this.login.bind(this);
    this.state={
      loaded:true,
      redirect:false
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }
  login (values) {
    this.setState({loaded:false});
    axios.post('/user/login', values)
    .then(res => {console.log(res.data);this.setState({loaded:true,redirect:true})
    this.props.createActionThunk("name",{name:"rahul"});
  })
    .catch(err => console.log(err.response.data));
  }
  render () {
    const { handleSubmit } = this.props;
  return (
    
    <Loader loaded={this.state.loaded}>
    {this.renderRedirect()}
    <form onSubmit={handleSubmit(this.login)}>
      <div>
          <h2>Login!</h2>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
      <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <p>Don't have an account? Sign up here<br/> Click <Link to="/">here</Link></p>
    </form>
    </Loader>
  )
}
}

Login = reduxForm({
  // a unique name for the form
  form: 'login'
})(Login)
function mapStateToProps(state) {
  return {
    default: state.default
  };
}
export default connect(mapStateToProps,{createActionThunk}) (Login);