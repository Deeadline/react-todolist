import React from 'react';

export const firebaseContext = {
	authStatusReported: true,
	isUserSignedIn: false,
};

export const FirebaseAuthContext = React.createContext(firebaseContext);
