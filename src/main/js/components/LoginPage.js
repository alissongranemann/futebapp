import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from 'actions/auth'

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__wrap_box">
            <span className="box-layout__title">
                Entrar
            </span>
            <div className="box-layout__box">
                <a 
                    className="google_btn" 
                    onClick={startLoginGoogle}>
                    <i className="fa fa-google"></i>
                    Google
                </a>
                <a 
                    className="face_btn" 
                    onClick={startLoginFacebook}>
                    <i className="fa fa-facebook-official"></i>
                    Facebook
                </a>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);