import React from 'react'

const Card = (props) => {

  return (
    <div className='ml-[30px] bg-white w-[230px] mb-[20px] mt-[20px] rounded-t-lg p-[3px]'>
        <div className='w-[225px] h-[223px] overflow-hidden'>
          <img className='w-full h-full rounded-t-lg' src={props.img} alt="" />
        </div>
        <div className='font-bold'>{props.title}</div>
        <div className='font-bold'>Цена:{props.price} сом</div>
        <div className='text-[13px] font-bold'>{props.description}</div>
    </div>
  )
}

export default Card