import React, {  useState } from 'react';
import './AuthForm.css';
import '../../styles/CommonStyles.css';

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
    const onSubmit = (event: React.SyntheticEvent) => {
        event?.preventDefault()
        console.log(email);
        console.log(password)
        console.log(memorised)
    }


    
    return (
        <section className='AuthForm__container'>
            <h1 className='heading1'>Войти</h1>
            <form className={'AuthForm__form'} onSubmit={onSubmit} >
                <input type='text' className='commonMargin commonInputDesign' onChange={handleEmailChange}/>
                <input type='password' className='commonMargin commonInputDesign' onChange={handlePasswordChange}/>
                <section className='AuthForm__options commonMargin' >
                    <label>
                    <input type='checkbox' checked={memorised} onChange={handleCheck}/> Запомнить меня
                    </label>
                    <a>Забыли пароль?</a>
                </section>
                <input type='submit' className='AuthForm__submit commonMargin commonSubmit'/>
            </form>
            <h6 className='AuthFrom_loginlink'>Зарегистрироваться</h6>
        </section>
    )
}

export default AuthForm
