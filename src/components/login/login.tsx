import React, { Component, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styled from "@utils/theme";
import { login } from "@config/firebase";

import { initialLoginState } from "@interfaces/login.interface";

import { Form, FormContent, FormWrapper } from "@components/shared/form";
import { Input } from "@components/shared/input";
import { Label } from "@components/shared/label";
import { PrimaryButton, BigButton } from "@components/shared/button";

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

const LinkButton = styled(Link)`
	text-decoration: none;
	margin: 0.5rem;
`;

type State = typeof initialLoginState;

type Props = {};

export class Login extends Component<Props, State> {
	state = initialLoginState;

	handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const { email, password } = this.state;
		login(email, password).catch(({ message }: { message: string }) => {
			return this.setState({ error: message });
		});
	}
	setEmail = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ email: event.target.value });
	}
	setPassword = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<FormWrapper>
				<LoginText>Login to application!</LoginText>
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
							required
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
							required
						/>
					</FormContent>
					<ForgotPassword to="register">
						Forgot password?
					</ForgotPassword>
					<FormContent>
						<BigButton>Sign In</BigButton>
					</FormContent>
				</Form>
				<FormContent>
					<RegisterText>Don't have account?</RegisterText>
					<LinkButton to="register">
						<PrimaryButton>Register</PrimaryButton>
					</LinkButton>
				</FormContent>
			</FormWrapper>
		);
	}
}
