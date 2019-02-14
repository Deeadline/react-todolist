import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	height: calc(100vh - (60px + 50px));
	background-color: ${({ theme }) => theme.colors.primary};
	${({ theme }) => theme.media.desktop} {
		height: calc(100vh - 80px);
	}
	padding: 2rem 1rem 1rem;
`;
