import React from 'react'
import Button from './Button'
import Exhibitions from './Exhibitions'

const Filter = () => {
  const [from, setForm] = React.useState('')
  const [up, setUp] = React.useState('')


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
            <Button name='Транспорт'/>
            <Button name='Личные вещи'/>
            <Button name='Дом и Сад'/>
            <Button name='Электроника'/>
            <Button name='Другое'/>
          </div>
        </div>
        <div>
          <Exhibitions 
            up={up}
            from={from}
          />
        </div>
    </div>
  )
  
}

export default Filter