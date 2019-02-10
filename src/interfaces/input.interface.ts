import { ChangeEvent } from "react";

export interface InputValue {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
