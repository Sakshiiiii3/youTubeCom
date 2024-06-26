import React from 'react'
import {sideBarList}  from '../sideBarLink';
const Sidebar = () => {
   
  return (
    <div className='w-1/6'>
      <ul className='mr-10'>
         {sideBarList.map((item)=>{
            return (
                <li className=' py-2'>{item}</li>
            )
         })}
      </ul>
   </div>
    
  )
}

export default Sidebar