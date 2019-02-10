import React, { Component, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styled from "../../utils/theme";
import { login } from "../../config/firebase";

import { initialLoginState } from "../../interfaces/login.interface";

import { Form, FormContent, FormWrapper } from "../shared/form";
import { Input } from "../shared/input";
import { PrimaryButton, BigButton } from "../shared/button";
import { PropsRouter } from "../../interfaces/props-router.interface";

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

type State = typeof initialLoginState;

export class Login extends Component<PropsRouter, State> {
	state = initialLoginState;

	handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const { email, password } = this.state;
		const { history } = this.props;

		login(email, password)
			.then(x => history.push("/"))
			.catch(({ message }: { message: string }) => {
				return this.setState({ error: message });
			});
	}
	handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({ [event.target.name]: event.target.value } as Pick<
			State,
			keyof State
		>);
	}

	showErrors = () => {
		const { error } = this.state;
		if (!!error) {
			<FormContent>
				<p>{this.state.error}</p>
			</FormContent>;
		} else {
			return null;
		}
	}

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
					{this.showErrors}
					<ForgotPassword to="register">
						Forgot password?
					</ForgotPassword>
					<FormContent>
						<BigButton>Sign In</BigButton>
					</FormContent>
				</Form>
				<FormContent>
					<RegisterText>Don't have account?</RegisterText>
					<PrimaryButton
						as={props => <Link {...props} to="/register" />}
					>
						Register
					</PrimaryButton>
				</FormContent>
			</FormWrapper>
		);
	}
}
