import React from 'react';
import s from './FormsControls.module.css';

const FormControl = ({input, meta: {touched, error}, TypeField, ...props}) => {

    const hasError = touched && error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : ' ')}>
            <div>
               {/* <TypeField {...input} {...props} />*/}
                { React.createElement(TypeField, {...input, ...props}) }
            </div>
            <div>
                { hasError && <span>{error}</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl TypeField={'textarea'} {...props} />
}

export const Input = (props) => {
    return <FormControl TypeField={'input'} {...props} />
}