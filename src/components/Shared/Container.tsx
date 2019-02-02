import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
	width: 100%;
	padding: 0 1.5rem;
	max-width: 768px;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
`;

export const Container = ({ children, ...props }: any) => (
	<ContainerWrapper {...props}>{children}</ContainerWrapper>
);
