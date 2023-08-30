import React from 'react'

const Buttons = (props) => {
    const colors = ['amber-600', 'purple-600', 'sky-500', 'emerald-500', 'yellow-400', 'red-600', 'blue-900', 'indigo-700', 'violet-800', 'rose-600']

    const color = colors[Math.floor(Math.random() * colors.length)]
    console.log(color);

  return (
    <button 
      className={`outline-none bg-white rounded-full w-[40px] h-[40px] text-[20px] mx-[20px] text-${color} `}
    >
      {props.i}
    </button>
  )
}

export default Buttons