import React from "react";
import styled from "styled-components";
const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	height: calc(100vh - (60px + 50px));
	background-color: ${({ theme }) => theme.color.primary};
	${({ theme }) => theme.media.desktop} {
		height: calc(100vh - (80px + 30px));
	}
	padding: 2rem 1rem 1rem;
`;
export const Main = ({ children }: any) => (
	<MainWrapper>{children}</MainWrapper>
);
