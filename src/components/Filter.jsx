import React from 'react'
import Button from './Button'
import Exhibitions from './Exhibitions'

const Filter = (props) => {
  const [from, setForm] = React.useState('')
  const [up, setUp] = React.useState('')

  const [navbtn, setNavbtn] = React.useState('Все')

  const buttonsNames = [
    {
      btn: 'Все',
      id: 0
    },
    {
      btn:'Транспорт',
      id: 1
    }, 
    {
      btn:'Личные вещи',
      id: 2
    }, 
    {
      btn:'Дом и Сад',
      id: 3
    }, 
    {
      btn:'Электроника',
      id: 4
    }, 
    {
      btn:'Другое',
      id: 5
    },
    {
      btn:'Избранные',
      id: 6
    }
  ]

  const func = (namebtn) =>{
    setNavbtn(namebtn)
  }

  const [search, setSearch] = React.useState('')

    const [isOpen, setIsOpen] = React.useState(false)
    
    const openMenu = () =>{
        setIsOpen(!isOpen)
    }


  return (
    <div className=''>
        <div className='bg-indigo-700 mx-[150px] p-[5px] pt-[80px] flex justify-end'>
          <input 
                type="text" 
                placeholder='что вы ищете?...'
                onChange={e => setSearch(e.target.value)}
                value={search}
                className={`clouse ${isOpen ? 'opened' : ''}`}
            />
          <button
                onClick={openMenu}
                className={`bg-indigo-400 hover:bg-indigo-500 rounded-full py-[2px] px-[10px] outline-none duration-150 ${isOpen ? 'rounded-l-lg' : ''}`}
            >
                {isOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
          </button>
        </div>
        <div className='bg-indigo-700 mx-[150px] flex items-center'>
          <div className='flex'>     
            <input 
              type="number" 
              placeholder='от' 
              className='outline-none rounded-[5px] w-[150px] px-[10px] py-[2px] m-[10px]'
              onChange={e => setForm(e.target.value)}
              value={from}
            />
            <input 
              type="number"
              placeholder='до' 
              className='outline-none rounded-[5px] w-[150px] px-[10px] py-[2px] m-[10px]'
              onChange={e => setUp(e.target.value)}
              value={up}
            />
            
          </div>

          <div className='buttons'>
            {buttonsNames.map(i  => (
              <Button 
                name={i.btn} 
                key={i.id} 
                func={() => func(i.btn)}/>
            ))}
          </div>
        </div>
        <div>
          <Exhibitions 
            up={up}
            from={from}
            nav={navbtn}
            search={search}
          />
        </div>
    </div>
  )
  
}

export default Filter