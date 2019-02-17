import firebase from 'firebase';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const register = (email, password) => {
	return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password);
};

export const user = () => {
	return auth.currentUser;
};

export const restorePassword = email => {
	return auth.sendPasswordResetEmail(email);
};

export const updatePassword = password => {
	user().updatePassword(password);
};

export const logout = () => {
	return auth.signOut();
};
