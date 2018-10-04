import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from 'actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__wrap_box">
            <div className="box-layout__box">
                <span className="box-layout__title">Sign In With</span>
                <a 
                    className="box-layout__google_btn" 
                    onClick={startLogin}>
                    <i className="fa fa-google"></i>
                Google
                </a>
                <a 
                    className="box-layout__face_btn" 
                    onClick={startLogin}>
                    <i className="fa fa-facebook-official"></i>
                Facebook
                </a>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);