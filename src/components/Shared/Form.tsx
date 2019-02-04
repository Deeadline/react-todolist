import styled from "styled-components";

export const FormWrapper = styled.section`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	max-height: 350px;
	max-width: 20rem;
	width: 100%;
	background-color: ${({ theme }) => theme.color.secondary};
	border-radius: 50px;
`;

export const Form = styled.form`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	height: 200px;
`;

export const FormContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0.6rem;
	width: 100%;
	text-align: center;
`;
