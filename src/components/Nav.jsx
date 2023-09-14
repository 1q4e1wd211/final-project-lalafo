import React from 'react'
import Filter from './Filter'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className='fixed w-[100%]'>
        <div className='flex justify-between px-[50px] py-[20px] items-center top-[0px] left-[0px] bg-indigo-800 overflow-hidden'>
                <Link to='/'
                  className='text-[20px] font-serif text-white '
                >
                  Logotype
                </Link>
            <div className='relative w-[660px] text-end'>    

                <Link to='/signin' 
                  className='bg-indigo-400 py-[2px] px-[20px] hover:bg-indigo-500 rounded-br-full'
                >
                  Войти
                </Link>

                <Link to='/signup' 
                  className='bg-indigo-400 py-[2px] px-[20px] hover:bg-indigo-500 mr-[20px] rounded-tl-full'
                >
                  Регестрация
                </Link>
                <button className='py-[2px] bg-indigo-400 px-[10px] rounded-lg hover:bg-indigo-500'>Подать обьявление</ button>
            </div>
        </div>
    </div>
  )
}

export default Nav