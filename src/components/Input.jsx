import React from 'react'
import Buttons from './Buttons'


const Input = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openMenu = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-600 mt-[140px] h-[200px] w-[1057px] flex justify-center flex-wrap relative'>
      <div className='mt-[50px]'>
        <input 
            type="text" 
            placeholder='Что вы ищете?'
            className='rounded-l-lg w-[900px] px-[10px] outline-none py-[10px]'
        />
        <button className='bg-slate-200 py-[10px] px-[25px] rounded-r-lg hover:bg-slate-300'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='absolute left-10 bottom-10'>
        <button 
          className='outline-none bg-white rounded-full w-[40px] h-[40px] text-[30px] hover:bg-slate-700 hover:text-white active:bg-slate-900' 
          onClick={openMenu}
        >
          <i class="fa-solid fa-ellipsis"></i>
        </button>
        <div className={`absolute right-[300px] opacity-100 top-[0px] ${isOpen ? 'right-[-850px] duration-150' : ''} `}>
              <div className='flex mx-[20px]'>
                 <Buttons i={<i class="fa-solid fa-car"></i>}/>
                 <Buttons i={<i class="fa-solid fa-house"></i>}/>
                 <Buttons i={<i class="fa-solid fa-wrench"></i>}/>
                 <Buttons i={<i class="fa-solid fa-seedling"></i>}/>
                 <Buttons i={<i class="fa-solid fa-plug"></i>}/>
                 <Buttons i={<i class="fa-solid fa-briefcase"></i>}/>
                 <Buttons i={<i class="fa-solid fa-shirt"></i>}/>
                 <Buttons i={<i class="fa-sharp fa-regular fa-futbol"></i>}/>
                 <Buttons i={<i class="fa-solid fa-paw"></i>}/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Input

// object-fit:contein