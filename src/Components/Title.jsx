import React from 'react'

function Title({ title }) {
  return (
    <div className='flex items-center justify-center py-10'>
      <h1 className='text-3xl sm:text-5xl lg:text-5xl text-center mt-6 text-secondary tracking-wide'>{title}</h1>
    </div>
  )
}

export default Title;
