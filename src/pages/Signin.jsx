import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signin = () => {

    const { register, handleSubmit, formState } = useForm()
    
    const onSumbit = (data) =>{
        console.log(data);
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
        <div className="form-title">Вход</div>
        <form onSubmit={handleSubmit(onSumbit)}>

            <input type="text" placeholder='Никнейм' {...register('login', formOption)}/>
            <div className='error'>{ formState.errors.login && formState.errors.login.message }</div>

            <input type="password" placeholder='Пароль' {...register('pass', formOption)}/>
            <div className='error'>{ formState.errors.pass && formState.errors.pass.message }</div>

            <button>Войти</button>
        </form>

        <div className='form-link'>Нет аккунта? <Link to='/signup'>Зарегестрируйся</Link></div>
    </div>
  )
}

export default Signin