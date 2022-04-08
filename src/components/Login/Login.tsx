import {Field, reduxForm} from 'redux-form';
import {maxLength, requiredField} from '../../utils/validators/validators';
import {Input} from '../common/FormsControls';

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


const maxLength15 = maxLength(15)
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={'login'}
                       type="text"
                       validate={[requiredField, maxLength15]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       type="password"
                       validate={[requiredField, maxLength15]}/>
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

