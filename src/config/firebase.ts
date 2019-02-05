import firebase from "firebase";

const config = {
	apiKey: "AIzaSyAKdzf5eYqRuIUkeP4ROE6Loqv0-rDnPuc",
	authDomain: "deeadline-todo-application.firebaseapp.com",
	databaseURL: "https://deeadline-todo-application.firebaseio.com",
	projectId: "deeadline-todo-application",
	storageBucket: "deeadline-todo-application.appspot.com",
	messagingSenderId: "317403743879",
};

firebase.initializeApp(config);
export const db = firebase.firestore();
export const auth = firebase.auth();

export const register = (email: string, password: string) => {
	return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email: string, password: string) => {
	return auth.signInWithEmailAndPassword(email, password);
};

export const user = () => {
	return auth.currentUser;
};

export const logout = () => {
	return auth.signOut();
};
