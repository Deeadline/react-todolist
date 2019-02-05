interface LoginState {
	email: string;
	password: string;
	error: string | null;
}

export const initialLoginState = Object.freeze({
	email: "",
	password: "",
	error: null,
}) as LoginState;
