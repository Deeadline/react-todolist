import React from 'react';
import styled from 'styled-components';

import { logout } from '../../config/firebase';
import { withAuthButton } from '../../hoc/with-auth';

import { PrimaryButton } from '../shared/button';
const Item = styled.li``;

class NavigationItem extends React.Component {
	logout = () => {
		logout();
	};
	render() {
		return (
			<Item>
				<PrimaryButton onClick={this.logout}>Logout</PrimaryButton>
			</Item>
		);
	}
}
export default withAuthButton(NavigationItem);
