import React from 'react'

const Nav = () => {
  return (
   <div className='flex bg-white fixed items-center text-slate-900 text-[18px] font-medium tracking-wider mt-[50px] '>
        <div className='flex items-center'>
            <a href="#">
              <img 
                className='w-[160px]' 
                src="https://img5.lalafo.com/i/posters/original/1e/98/755d0693f57026a127fcbf8c8a82.jpeg" alt="" />
            </a>
            <i class="fa-solid fa-bars hover:text-violet-700 cursor-pointer mr-[400px]"></i>
        </div>
        <div className='flex items-center'>
            <i class="fa-solid fa-heart hover:text-violet-700 cursor-pointer	"></i>
            <div className='mx-[20px] hover:text-violet-700 cursor-pointer	'>Войти / Регестрация</div>
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-[10px] py-[3px] mr-[10px] px-[20px]'>Поддать обьявление</button>
        </div>
    </div>
  )
}

export default Nav