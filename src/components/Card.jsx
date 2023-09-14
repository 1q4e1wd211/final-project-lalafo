import React, { useState } from 'react'

const Card = (props) => {
  const [favorites, setFavorites] = useState(props.favorites);
  console.log(props.favorites);
  const handleFavoriteClick = () => {
    setFavorites(!favorites);
  };

  return (
    <div className='ml-[30px] bg-white w-[230px] mb-[20px] mt-[20px] rounded-t-lg p-[3px]'>
      <div className='w-[225px] h-[223px] overflow-hidden'>
        <img className='w-full h-full rounded-t-lg' src={props.img} alt="" />
      </div>
      <div className='font-bold'>{props.title}</div>
      <div className='font-bold'>Цена:{props.price} сом</div>
      <div className='text-[13px] font-bold'>{props.description}</div>
      <button
        onClick={handleFavoriteClick}
        className={`text-red-600 ${favorites ? 'text-red-600' : ''}`}
      >
        {favorites ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
      </button>
    </div>
  )
}

export default Card