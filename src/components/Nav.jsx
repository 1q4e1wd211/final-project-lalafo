import React from 'react'

const Nav = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    const openMenu = () =>{
        setIsOpen(!isOpen)
    }


  return (
    <div className='flex justify-between px-[50px] py-[20px] items-center top-[0px] left-[0px] bg-indigo-800'>
        <a href='#' className='text-[20px] font-serif'>Logotype</a>
        <div className='relative w-[660px] text-end'>
            <input 
                type="text" 
                placeholder='что вы ищете?...'
                className={`rounded-l-lg bg-slate-200 px-[20px] py-[2px] outline-none absolute left-[710px] duration-150  ${isOpen ? 'left-[4px]' : ''}`}
            />
            <button
                onClick={openMenu}
                className={`bg-indigo-400 rounded-full py-[2px] px-[10px] outline-none duration-150 ${isOpen ? 'rounded-l-lg' : ''}`}
            >
                {isOpen ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-magnifying-glass"></i>}
            </button>
            <a href="#" className='mx-[50px]'>Регистрация \ Вход</a>
            <button className='py-[2px] bg-indigo-400 px-[10px] rounded-[10px]'>Подать обьявление</button>
        </div>
    </div>
  )
}

export default Nav