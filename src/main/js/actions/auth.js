import { firebase } from 'service/firebase';

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogout = () => () => firebase.auth().signOut();

export const login = uid => ({
    type: 'LOGIN',
    uid,
});

const linkAccount = (email, credential) => firebase.auth()
    .fetchSignInMethodsForEmail(email).then((providers) => {
        if (providers.length > 0) {
            if (providers[0] === firebase.auth.GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD) {
                const googleProvider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(googleProvider)
                    .then(result => result.user.linkAndRetrieveDataWithCredential(credential));
            }
            if (providers[0] === firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD) {
                const facebookProvider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(facebookProvider)
                    .then(result => result.user.linkAndRetrieveDataWithCredential(credential));
            }
        }
    });

const startLogin = provider => firebase.auth().signInWithPopup(provider).catch((error) => {
    if (error.code === 'auth/account-exists-with-different-credential') {
        return linkAccount(error.email, error.credential);
    }
    return null;
});

export const startLoginGoogle = () => () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return startLogin(googleProvider);
};

export const startLoginFacebook = () => () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return startLogin(facebookProvider);
};

export const startSignUp = (signUpData = {}) => () => {
    const {
        email = '',
        password = '',
    } = signUpData;
    return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
};

export const startLoginEmail = (signInData = {}) => () => {
    const {
        email = '',
        password = '',
    } = signInData;
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const startResetPassword = (resetData = {}) => () => {
    const {
        email = '',
    } = resetData;
    return firebase.auth().sendPasswordResetEmail(email);
};
