import React, { useState } from 'react';
import './AuthForm.css';
import '../../styles/CommonStyles.css';
import { Link } from 'react-router-dom';
import { authorize, getInfo } from '../../../API/fetch_functions';
import { EyeInvisibleOutlined } from '@ant-design/icons';

const AuthForm = () => {

    const [email, setEmail ] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [memorised, setMemorised] = useState<boolean>(false)
    const [passwordState, setPasswordState] = useState<string>('password')


    const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.currentTarget.value)
    }

    const handleCheck = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setMemorised(!memorised)
    }
    const onSubmit = async (event: React.SyntheticEvent) => {
        event?.preventDefault()
        let response: any = await authorize({
            email: email,
            password: password
        })
        localStorage.setItem('authToken', response.authToken)
        console.log(localStorage.getItem('authToken'));
    }

    const toggleVisibility = (event: React.SyntheticEvent) => {
        event.preventDefault();
        passwordState === 'password' ? setPasswordState('text') : setPasswordState('password');
    }


    
    return (
        <section className='AuthForm__container'>
            <h1 className='heading1 authForm__heading1'>Войти</h1>
            <form className={'AuthForm__form'} onSubmit={onSubmit} >
                <input type='text' className='commonMargin commonInputDesign' onChange={handleEmailChange} placeholder='Email'/>
                <div className="passwordInput">
                <input 
                type={passwordState} 
                className='commonMargin commonInputDesign passwordInput' 
                onChange={handlePasswordChange} 
                placeholder='Пароль'/>
                <EyeInvisibleOutlined className="icon" onClick={toggleVisibility}/>
                </div>
                <section className='AuthForm__options commonMargin' >
                    <label>
                    <input type='checkbox' checked={memorised} onChange={handleCheck} className="ML0 arginRight"/> Запомнить меня
                    </label>
                    <h5 onClick={getInfo} className="MR0 MarginLeft">Забыли пароль?</h5>
                </section>
                <input type='submit' className='AuthForm__submit commonMargin commonSubmit'/>
            </form>
            <Link to='/login' className="commonLink">Зарегистрироваться</Link>
        </section>
    )
}

export default AuthForm
