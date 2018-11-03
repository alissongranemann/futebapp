import React from 'react';
import PositiveActionButton from './PositiveActionButton';

export const FormWrapper = (props) => {
    const { onSubmit, children } = props;
    return (
        <React.Fragment>
            {children}
            <div className="form__footer">
                <PositiveActionButton label="Salvar" onClick={onSubmit} />
            </div>
        </React.Fragment >
    );
};

export default FormWrapper;
