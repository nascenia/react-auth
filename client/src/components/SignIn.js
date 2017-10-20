import React, { Component, PropTypes } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      show: true
    }

    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChanged (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state);
    this.setState(() => {
     return {
      email: '',
      password: ''
    }
    });
  }

  render () {
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit} onChange={this.onFieldChanged}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" name="email" value={this.state.email}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl required type="password" placeholder="Password" name="password" value={this.state.password}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="success" type="submit">
                Sign In
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignInForm;
