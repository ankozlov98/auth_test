import React, { useState } from 'react';
import './AuthForm.css';
import '../../styles/CommonStyles.css';
import { Link } from 'react-router-dom';
import { authorize, getInfo } from '../../../API/fetch_functions';

const AuthForm = () => {

    const [email, setEmail ] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [memorised, setMemorised] = useState<boolean>(false)
    


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


    
    return (
        <section className='AuthForm__container'>
            <h1 className='heading1'>Войти</h1>
            <form className={'AuthForm__form'} onSubmit={onSubmit} >
                <input type='text' className='commonMargin commonInputDesign' onChange={handleEmailChange} placeholder='Email'/>
                <input type='password' className='commonMargin commonInputDesign' onChange={handlePasswordChange} placeholder='Пароль'/>
                <section className='AuthForm__options commonMargin' >
                    <label>
                    <input type='checkbox' checked={memorised} onChange={handleCheck} className="ML0 arginRight"/> Запомнить меня
                    </label>
                    <h5 onClick={getInfo} className="MR0 MarginLeft">Забыли пароль?</h5>
                </section>
                <input type='submit' className='AuthForm__submit commonMargin commonSubmit'/>
            </form>
            <Link to='/login'>Зарегистрироваться</Link>
        </section>
    )
}

export default AuthForm
