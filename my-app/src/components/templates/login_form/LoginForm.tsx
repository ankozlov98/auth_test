import React, { useEffect, useState } from 'react';
import './LoginForm.css'
import '../../styles/CommonStyles.css'
import { Link } from 'react-router-dom';
import { register } from '../../../API/fetch_functions';
import { registerResponse } from '../../../API/fetch_functions';

const LoginForm = () => {
    const [email, setEmail ] = useState<string>('');
    const [name, setName ] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('')
    const [passwordCheck, setPasswordCheck] = useState<boolean>(false)

    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.currentTarget.value)
    }

    const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setEmail(event.currentTarget.value)
    }

    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.currentTarget.value)
    }

    const handlePasswordRepeatChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPasswordRepeat(event.currentTarget.value)
    }

    const handlePasswordCheck = (event: React.SyntheticEvent) => {
        event.preventDefault();
        passwordRepeat === password ? setPasswordCheck(!passwordCheck) : setPasswordCheck(false)
    }

    const onSubmit = (event: React.SyntheticEvent) => {
        handlePasswordCheck(event);
        (name && email && password && passwordCheck) ? onSuccessfulSubmit(register)
            : console.log('fail')
    }

    const onSuccessfulSubmit = async (func: (info: any) => Promise<any>)  => {
        let response = await func({
                UserName: name,
                email: email,
                password: password})
        localStorage.setItem('authToken', response.authToken)
        console.log(localStorage.getItem('authToken'));
    }

    useEffect(() => {
        passwordRepeat === password ?
            setPasswordCheck(true) : setPasswordCheck(false)
        }
    , [passwordRepeat, password])

    return (
        <section className='LoginForm__container'>
            <h1>Зарегистрироваться</h1>
            <form className='LoginForm__form' onSubmit={onSubmit}>
            <input type='text' className='commonMargin commonInputDesign' onChange={handleNameChange}/>
            <input type='text' className='commonMargin commonInputDesign' onChange={handleEmailChange}/>
            <input type='password' className='commonMargin commonInputDesign' onChange={handlePasswordChange}/>
            <input type='password' className='commonMargin commonInputDesign' onChange={handlePasswordRepeatChange}/>
            {passwordCheck ?  
                <h6>Пароли совпадают</h6>
             : <h6>Пароли не совпадают</h6>}
            <input type='submit' className='AuthForm__submit commonMargin commonSubmit'/>
            </form>
            <Link to="/">Войти</Link>
        </section>
    )
}

export default LoginForm
