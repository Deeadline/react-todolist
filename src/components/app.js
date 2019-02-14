import React, { Component } from 'react';
import { Layout } from './shared/layout';
import { FirebaseAuthProvider } from './firebase-provider/firebase-provider';

class App extends Component {
	render() {
		return (
			<FirebaseAuthProvider>
				<Layout />
			</FirebaseAuthProvider>
		);
	}
}

export default App;
