import { firebase } from 'service/firebase';

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        return startLogin(googleProvider);
    };
};

export const startLoginFacebook = () => {
    return () => {
        var facebookProvider = new firebase.auth.FacebookAuthProvider();
        return startLogin(facebookProvider);
    };
};

const startLogin = (provider) => {
    return firebase.auth().signInWithPopup(provider).catch(function (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            return linkAccount(error.email, error.credential);
        }
    });
};

const linkAccount = (email, credential) => {
    return firebase.auth().fetchProvidersForEmail(email).then(function (providers) {
        if (providers.length > 0) {
            if (providers[0] == firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD) {
                var googleProvider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(googleProvider).then(function (result) {
                    return result.user.linkAndRetrieveDataWithCredential(credential);
                });
            }
            if (providers[0] == firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD) {
                var facebookProvider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
                    return result.user.linkAndRetrieveDataWithCredential(credential);
                });
            }
        }
    });
};

export const startSignUp = (signUpData = {}) => {
    return () => {
        const {
            email = '',
            password = ''
        } = signUpData;
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.message);
            // if (error.code === 'auth/email-already-in-use') {
            //     linkAccount(error.email, error.credential);
            // }
        });
    };
};