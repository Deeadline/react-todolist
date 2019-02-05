import React, { Component, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styled from "../../utils/theme";
import { register } from "../../config/firebase";

import { initialRegisterState } from "../../interfaces/register.interface";

import { Form, FormContent, FormWrapper } from "../Shared/form";
import { Input } from "../Shared/input";
import { Label } from "../Shared/label";
import { BigButton, PrimaryButton } from "../Shared/button";

const RegisterText = styled.p`
	font-weight: ${({ theme }) => theme.fonts.bold};
	font-size: 1.5rem;
	padding: 0.1rem;
	margin: 1.4rem 0;
	text-align: center;
`;

const LoginText = styled.p`
	font-weight: ${({ theme }) => theme.fonts.thin};
	font-size: 0.9rem;
	padding: 0.5rem;
`;

const LinkButton = styled(Link)`
	text-decoration: none;
	margin: 0.5rem;
`;

type State = typeof initialRegisterState;

type Props = {};

export class Register extends Component<Props, State> {
	state = initialRegisterState;

	handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const { email, password, error } = this.state;
		if (error !== null) {
			register(email, password).catch(
				({ message }: { message: string }) => {
					this.setState({
						error: message,
					});
				}
			);
		}
	}

	setEmail = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ email: event.target.value });
	}

	setPassword = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ password: event.target.value });
	}

	setConfirmPassword = (event: ChangeEvent<HTMLInputElement>): void => {
		if (this.state.password !== event.target.value) {
			this.setState({ error: "Password don't match!" });
		}
		this.setState({ confirmPassword: event.target.value });
	}

	render() {
		return (
			<FormWrapper>
				<RegisterText>Register to application!</RegisterText>
				<Form onSubmit={this.handleSubmit}>
					<FormContent>
						<Label htmlFor="email">E-mail</Label>
						<Input
							id="email"
							name="email"
							type="text"
							placeholder="Enter email"
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
					<FormContent>
						<Label htmlFor="confirmPassword">Password</Label>
						<Input
							type="password"
							name="confirmPassword"
							id="confirmPassword"
							value={this.state.confirmPassword}
							onChange={this.setConfirmPassword}
							placeholder="Confirm password"
							required
						/>
					</FormContent>
					<FormContent />
					<FormContent>
						<BigButton>Sign Up</BigButton>
					</FormContent>
				</Form>
				<FormContent>
					<LoginText>Already have account?</LoginText>
					<LinkButton to="login">
						<PrimaryButton>Sign In</PrimaryButton>
					</LinkButton>
				</FormContent>
			</FormWrapper>
		);
	}
}
