interface RegisterState {
	email: string;
	password: string;
	confirmPassword: string;
	error: string | null;
}

export const initialRegisterState = Object.freeze({
	email: "",
	password: "",
	confirmPassword: "",
	error: null,
}) as RegisterState;
