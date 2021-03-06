import React from 'react';
import s from './Login.module.css';
import sFormControl from './../../components/common/FormsControls.module.css';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControls';
import {required} from '../../utils/validators/validator';
import {Navigate} from 'react-router-dom';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    let x = captchaUrl;
    debugger



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'}  name={'email'}
                       component={Input}
                       validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'}  name={'password'}
                       component={Input}
                       type='password'
                       validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'}  name={'rememberMe'} component={Input}/>
                Remember me
            </div>
            { (error) &&
            <div className={sFormControl.formSomeError}>
                {error}
            </div> }
            <div>

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl && <Field name={'captcha'}
                                      component={Input}
                                      validate={[required]} />}

                <button>Login</button>
            </div>
        </form>
    );

}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate replace to={'/profile'}/>
    }

    return(
        <div>
            Вы не авторизованы на сайте. Если у вас нет аккаунта пройдите&nbsp;
            <a className={s.link} target='_blank'
               href={'https://social-network.samuraijs.com/login'}>регистрацию</a>
            <hr />
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )

}

export default Login;