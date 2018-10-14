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
    return firebase.auth().signInWithPopup(provider).then(function (result) {
        return Promise.resolve(result);
    }).catch(function (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
            linkAccount(error.email, error.credential);
        }
    });
};

const linkAccount = (email, credential) => {
    firebase.auth().fetchProvidersForEmail(email).then(function (providers) {
        if (providers.length > 0) {
            if (providers[0] == firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD) {
                var googleProvider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(googleProvider).then(function (result) {
                    result.user.linkAndRetrieveDataWithCredential(credential);
                });
            }
            else if (providers[0] == firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD) {
                var facebookProvider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
                    result.user.linkAndRetrieveDataWithCredential(credential);
                });
            }
        }
    });
};
