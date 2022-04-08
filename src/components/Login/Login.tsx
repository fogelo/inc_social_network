import {Field, reduxForm} from 'redux-form';
import {maxLength, requiredField} from '../../utils/validators/validators';
import {Input} from '../common/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';


const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (email: any, password: any, rememberMe: any) => {
            dispatch(login(email, password, rememberMe))
        }
    }
}



const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} {...props}/>
        </div>
    )
}


const maxLength50 = maxLength(50)
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={'login'}
                       type="text"
                       validate={[requiredField, maxLength50]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type="password"
                       validate={[requiredField, maxLength50]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/>
                remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login)