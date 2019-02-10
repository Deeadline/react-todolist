import React from "react";

import styled from "../../utils/theme";

import { InputValue } from "../../interfaces/input.interface";

export const InputWrapper = styled.input`
	width: 80%;
	text-align: center;
	padding: 0.7rem;
	background: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.third};
	font-weight: ${({ theme }) => theme.fonts.thin};
	border-radius: 0;
	box-shadow: none;
	color: white;
	line-height: 0.3rem;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;

const Label = styled.label`
	display: none;
`;

export const Input = ({
	id,
	name,
	type,
	placeholder,
	value,
	handleChange,
}: InputValue) => (
	<>
		<Label htmlFor={name}>{name}</Label>
		<InputWrapper
			id={id}
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			required
		/>
	</>
);
