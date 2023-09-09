import React from 'react'

const Button = (props) => {
  return (
    <button className='hover:bg-indigo-500'>{props.name}</button>
  )
}

export default Button