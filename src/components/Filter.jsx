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
      id:5
    }]

  const func = (namebtn) =>{
    setNavbtn(namebtn)
  }

  const search = props.search


  return (
    <div className=''>
        <div className='bg-indigo-700 mx-[150px] flex items-center'>
          <div className='flex'>     
            <input 
              type="number" 
              placeholder='от' 
              className='outline-none rounded-[5px] px-[10px] py-[2px] m-[10px]'
              onChange={e => setForm(e.target.value)}
              value={from}
            />
            <input 
              type="number"
              placeholder='до' 
              className='outline-none rounded-[5px] px-[10px] py-[2px] m-[10px]'
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