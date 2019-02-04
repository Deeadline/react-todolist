import React, { Component } from "react";
import { register } from "../../config/firebase";
import { Input } from "../Shared/Input";
import { Form, FormContent } from "../Shared/Form";
import { Button } from "../Shared/Button";
import { Label } from "../Shared/Label";

class Register extends Component {
	state = {
		email: "",
		password: "",
		confirmPassword: "",
		error: null,
	};

	handleSubmit = (event: any) => {
		event.preventDefault();
		const { email, password, confirmPassword } = this.state;
		if (password === confirmPassword) {
			register(email, password).catch(error => {
				this.setState({ error: error.message });
			});
		} else {
			this.setState({ error: "Password don't match!" });
		}
	}

	setEmail = (event: any) => {
		this.setState({ email: event.target.value });
	}

	setPassword = (event: any) => {
		this.setState({ password: event.target.value });
	}

	setConfirmPassword = (event: any) => {
		this.setState({ confirmPassword: event.target.value });
	}

	render() {
		return (
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
					<Label htmlFor="confirmPassword">Password</Label>
					<Input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={this.state.confirmPassword}
						onChange={this.setConfirmPassword}
						placeholder="Enter password"
					/>
				</FormContent>
				<Button>Register</Button>
			</Form>
		);
	}
}

export default Register;
