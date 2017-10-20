import React, { Component, PropTypes } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChanged (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit (event) {
    event.preventDefault()
    const { name, surname, email } = this.state
    this.props.onSubmit(this.state);
    this.setState(() => {
     return {
      name: '',
      email: '',
      password: ''
    }
    });
  }

  render () {
    return (
      <div>
        <Form horizontal onSubmit={this.onSubmit} onChange={this.onFieldChanged}>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl required type="text" placeholder="name" name="name" value={this.state.name}/>
          </Col>
        </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl required type="email" placeholder="Email" name="email" value={this.state.email}/>
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
              <Button  bsStyle="success" type="submit">
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignUpForm;
