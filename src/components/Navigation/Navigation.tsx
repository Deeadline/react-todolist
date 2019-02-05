import React from "react";
import styled from "../../utils/theme";

import { PrimaryButton } from "../Shared/button";

const NavigationWrapper = styled.nav`
	padding: 1rem 0;
`;

const NavigationList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;
const NavigationItem = styled.li``;
export const Navigation = () => (
	<NavigationWrapper>
		<NavigationList>
			<NavigationItem>
				<PrimaryButton>Logout</PrimaryButton>
			</NavigationItem>
		</NavigationList>
	</NavigationWrapper>
);
