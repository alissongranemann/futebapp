import { firebase, googleAuthProvider } from 'service/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginFacebook = () => {
    return () => {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        // .then(function(result) {
        //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //     var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;
        //     // ...
        //   }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        // });
        return firebase.auth().signInWithPopup(facebookProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};