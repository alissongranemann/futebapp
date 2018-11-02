import React from 'react';
import SaveButton from './SaveButton';
import CancelButton from './CancelButton';

export class FormWrapper extends React.Component {
    render() {
        const { onSubmit, onCancel } = this.props;
        return (
            <React.Fragment>
                {this.props.children}
                <div className="form-footer">
                    <CancelButton onClick={onCancel} />
                    <SaveButton onClick={onSubmit}/>
                </div>
            </React.Fragment >
        );
    }
}

export default FormWrapper;
