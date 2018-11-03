import React from 'react';
import PositiveActionButton from './PositiveActionButton';
import CancelButton from './CancelButton';

export class FormWrapper extends React.Component {
    render() {
        const { onSubmit, onCancel, children } = this.props;
        return (
            <React.Fragment>
                {children}
                <div className="form__footer">
                    <CancelButton onClick={onCancel} />
                    <PositiveActionButton label="Salvar" onClick={onSubmit}/>
                </div>
            </React.Fragment >
        );
    }
}

export default FormWrapper;
