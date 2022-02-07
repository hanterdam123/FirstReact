import React from "react"
import { connect } from "react-redux"
import  {reduxForm, Field}  from "redux-form"
import { Textarea } from "../validators/FormsControl"
import { requiredField, maxLengthCreator } from "../validators/validators"
import  { Logi } from '../Redux/authReducer' 
import {Redirect} from 'react-router-dom'

let FormMax = maxLengthCreator(50)

const LoginForm = (props) => {
    return (
    <form style={{display:'block'}} onSubmit={props.handleSubmit}>
        {props.error && <p>Ошибка</p>}
        <div>
            <Field placeholder={'Login'} name={'login'} component={Textarea} validate={[requiredField ,FormMax]}></Field>
        </div>
        <div>
            <Field type={'password'} placeholder={'Password'} name={'password'} component={Textarea} validate={[requiredField, FormMax]}></Field>
        </div>
        Запомнить<Field type={'checkbox'} name={'remember'} component={Textarea}></Field>
        <button>Login</button>
    </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.Logi(formData.email, formData.password, formData.remember)
    }

    if(props.isAuth === true) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div style={{textAlign:'center', display:'block', alignItems:'center' }}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

    const mapStateToProps = (state) => ({
        isAuth:state.authReducer.isAuth
    })

export default connect(mapStateToProps,  {Logi})(Login)