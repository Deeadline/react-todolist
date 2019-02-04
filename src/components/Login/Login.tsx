import React, { Component } from "react";
import { Form, FormContent, FormWrapper } from "../Shared/Form";
import { login } from "../../config/firebase";
import { Input } from "../Shared/Input";
import { Label } from "../Shared/Label";
import { PrimaryButton } from "../Shared/Button";
import styled from "styled-components";

const ForgotPassword = styled.p`
	font-weight: ${({ theme }) => theme.font.thin};
	font-size: 1rem;
	padding: 0.4rem;
`;

class Login extends Component {
	state = {
		email: "",
		password: "",
		error: null,
	};

	handleSubmit = (event: any) => {
		event.prevendDefault();
		const { email, password } = this.state;
		login(email, password).catch(error =>
			this.setState({ error: error.message })
		);
	}
	setEmail = (event: any) => {
		this.setState({ email: event.target.value });
	}
	setPassword = (event: any) => {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<FormWrapper>
				<p>Login to application!</p>
				<Form onSubmit={this.handleSubmit}>
					<FormContent>
						<Label htmlFor="email">E-mail</Label>
						<Input
							id="email"
							name="email"
							type="text"
							placeholder="Enter login"
							value={this.state.email}
							onChange={this.setEmail}
						/>
					</FormContent>
					<FormContent>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							name="password"
							id="password"
							value={this.state.password}
							onChange={this.setPassword}
							placeholder="Enter password"
						/>
					</FormContent>
					<FormContent>
						<ForgotPassword>Forgot password?</ForgotPassword>
						<PrimaryButton>Login</PrimaryButton>
					</FormContent>
				</Form>
			</FormWrapper>
		);
	}
}

export default Login;
