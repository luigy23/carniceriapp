import React from 'react'

const NavMenu = () => {
  return (
    <div className='w-full flex  bg-[#933333] text-white p-6 items-center justify-center'>
        <div className='w-1/2'>Logo</div>
        <div className='w-1/2 flex justify-end gap-8'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
        </div>


    </div>
  )
}

export default NavMenu