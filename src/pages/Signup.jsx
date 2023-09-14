import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signup = () => {
    const { register, handleSubmit, formState } = useForm()
    
    const onSumbit = (data) =>{
        console.log(data)
    }

    const formOption = {
        required: 'Поле не должно быть пустым',
        maxLength: {
            value: 25,
            message: 'Неболее 25 символов',
        },
        minLength:{
            value: 3,
            message: 'Неменее 3 символов'
        }
    }

    return (
        <div className='form'>
            <div className="form-title">Регестрация</div>

            <form onSubmit={handleSubmit(onSumbit)}>
                <input type="email" placeholder='Почта' {...register('Email', formOption)} />
                <div className='error'>{ formState.errors.Email && formState.errors.Email.message} </div>

                <input type="text" placeholder='Никнейм' {...register('Login', formOption)} />
                <div className='error'>{ formState.errors.Login && formState.errors.Login.message }</div>

                <input type="password" placeholder='Пароль'  {...register('Pass', formOption)} />
                <div className='error'>{ formState.errors.Pass && formState.errors.Pass.message }</div>

                <button>Зарегестрироваться</button>
            </form>

            <div className='form-link'>Уже есть аккаунт? <Link to='/signin'>Войти</Link> </div>
        </div>
    )
}

export default Signup