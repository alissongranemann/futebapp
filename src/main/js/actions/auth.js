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
        facebookProvider.addScope('email');
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
                facebookProvider.addScope('email');
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

export const startLoginEmail = (signInData = {}) => {
    return () => {
        const {
            email = '',
            password = ''
        } = signInData;
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
};

export const startResetPassword = (resetData = {}) => {
    return () => {
        const {
            email = ''
        } = resetData;
        return firebase.auth().sendPasswordResetEmail(email);
    };
};

export const startConfirmResetPassword = (resetData = {}) => {
    return () => {
        const {
            code = '',
            newPassword = ''
        } = resetData;
        return firebase.auth().confirmPasswordReset(code, newPassword);
    };
};
