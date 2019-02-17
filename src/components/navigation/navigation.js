import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../navigation/navigation-item';

const Wrapper = styled.nav`
	padding: 1rem 0;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;
export const Navigation = () => (
	<Wrapper>
		<List>
			<NavigationItem />
		</List>
	</Wrapper>
);
