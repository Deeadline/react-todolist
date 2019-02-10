import React, { Component, FormEvent, ChangeEvent } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import styled from "../../utils/theme";

import { register } from "../../config/firebase";

import { initialRegisterState } from "../../interfaces/register.interface";

import { Form, FormContent, FormWrapper } from "../shared/form";
import { Input } from "../shared/input";
import { BigButton, PrimaryButton } from "../shared/button";
import { PropsRouter } from "../../interfaces/props-router.interface";

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

type State = typeof initialRegisterState;

export class Register extends Component<PropsRouter, State> {
	state = initialRegisterState;

	handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const { email, password } = this.state;
		const { history } = this.props;

		if (this.validate()) {
			register(email, password)
				.then(x => history.push("/"))
				.catch(({ message }: { message: string }) => {
					this.setState({
						error: message,
					});
				});
		}
	}

	handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		this.setState({
			[event.target.name]: event.target.value,
		} as Pick<State, keyof State>);
	}

	validate = (): boolean => {
		const { password, confirmPassword } = this.state;

		if (!this.checkPassword(password)) {
			this.setState({
				error:
					"Password must have at least 6 characters, one number, one lowercase and one uppercase letter",
			});
			return false;
		}
		if (password !== confirmPassword) {
			this.setState({
				error: "Password don't match!",
			});
			return false;
		}
		return true;
	}

	checkPassword = (password: string): boolean => {
		const regexp = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/);
		return regexp.test(password);
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
				<RegisterText>Register to application!</RegisterText>
				<Form onSubmit={this.handleSubmit}>
					<FormContent>
						<Input
							id="email"
							name="email"
							type="name"
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
					<FormContent>
						<Input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							placeholder="Repeat password"
							value={this.state.confirmPassword}
							handleChange={this.handleChange}
						/>
					</FormContent>
					{this.showErrors}
					<FormContent>
						<BigButton>Sign Up</BigButton>
					</FormContent>
				</Form>
				<FormContent>
					<LoginText>Already have account?</LoginText>
					<PrimaryButton
						as={props => <Link {...props} to="/login" />}
					>
						Sign In
					</PrimaryButton>
				</FormContent>
			</FormWrapper>
		);
	}
}
