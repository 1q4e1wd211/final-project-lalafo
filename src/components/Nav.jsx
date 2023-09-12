import React from 'react'
import Filter from './Filter'

const Nav = () => {
    const [search, setSearch] = React.useState('')

    const [isOpen, setIsOpen] = React.useState(false)

    const openMenu = () =>{
        setIsOpen(!isOpen)
    }


  return (
    <div>
        <div className='flex justify-between px-[50px] py-[20px] items-center top-[0px] left-[0px] bg-indigo-800 overflow-hidden'>
            <a href='#' className='text-[20px] font-serif text-white'>Logotype</a>
            <div className='relative w-[660px] text-end'>       
                <input 
                    type="text" 
                    placeholder='что вы ищете?...'
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    className={`clouse ${isOpen ? 'opened' : ''}`}
                />
                <button
                    onClick={openMenu}
                    className={`bg-indigo-400 hover:bg-indigo-500 rounded-full py-[2px] px-[10px] outline-none duration-150 $   {isOpen ? 'rounded-l-lg' : ''}`}
                >
                    {isOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                </button>
                <a href="#" className='mx-[50px] text-white'>Регистрация \ Вход</a>
                <button className='py-[2px] bg-indigo-400 px-[10px] rounded-[10px] hover:bg-indigo-500'>Подать обьявление</ button>
            </div>
        </div>
        <Filter
            search={search}
        />
    </div>
  )
}

export default Nav