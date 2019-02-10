import React from "react";

export const firebaseContext = {
	isUserSignedIn: false,
	authStatusReported: false,
};

export const FirebaseAuthContext = React.createContext(firebaseContext);
