import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { login } from "../../config/firebase";

import { Form, FormContent, FormWrapper } from "../shared/form";
import { Input } from "../shared/input";
import { PrimaryButton, BigButton } from "../shared/button";

const LoginText = styled.p`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 2rem 0;
  text-align: center;
`;

const ForgotPassword = styled(Link)`
  font-weight: ${({ theme }) => theme.fonts.thin};
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: right;
  color: white;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.third};
    cursor: pointer;
  }
`;

const RegisterText = styled.p`
  font-weight: ${({ theme }) => theme.fonts.thin};
  font-size: 0.9rem;
  padding: 0.5rem;
`;

export class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    login(email, password)
      .then(() => history.push("/calendar"))
      .catch(({ message }) => {
        return this.setState({ error: message });
      });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showErrors = () => {
    const { error } = this.state;
    return (
      !!error && (
        <FormContent>
          <p>{error}</p>
        </FormContent>
      )
    );
  };

  render() {
    return (
      <FormWrapper>
        <LoginText>Login to application!</LoginText>
        <Form onSubmit={this.handleSubmit}>
          <FormContent>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              handleChange={this.handleChange}
            />
          </FormContent>
          <FormContent>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              handleChange={this.handleChange}
            />
          </FormContent>
          {this.showErrors()}
          <ForgotPassword to="register">Forgot password?</ForgotPassword>
          <FormContent>
            <BigButton>Sign In</BigButton>
          </FormContent>
        </Form>
        <FormContent>
          <RegisterText>Don't have account?</RegisterText>
          <PrimaryButton as={props => <Link {...props} to="/register" />}>
            Register
          </PrimaryButton>
        </FormContent>
      </FormWrapper>
    );
  }
}
