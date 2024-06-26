import React from 'react'
// import  {tagBarList} from "../tagBarLink"
 import {BrowserRouter as Router ,Link} from 'react-router-dom'
// import music from './components/music'
// import livemusic from './components/livemusic'
// import computerKeyboard from './components/computerKeyboard'
// import computerProgramming from './components/computerProgramming'
// import games from './components/games'
// import comedy from './components/comedy'
// import App from './App'
const Tags = () => {
 const tagBarList = ['All', 'Music', 'LiveMusic', 'Computer Programing', 'Computer KeyBoard','Games', 'Comedy']
  return (
   
   <ul className='flex'>
    
    {/* {tagBarList.map((item)=>{
       return (<li className='bg-grey-200 px-2 py-1 rounded-md'>{item}</li>) })} */}
       {/* {tagBarList.map((item)=>{
            return (
                <li className='bg-gray-200 px-2 py-1 rounded-md mx-2'>{item}</li>
            )
         })} */}
        {/* <Router> */}
        
       <li> <Link  to=''  className='bg-gray-200 px-2 py-1 rounded-md mx-3'>All</Link></li>
       <li>  <Link to='/music'className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Music</Link></li>
       <li> <Link to='/livemusic' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>LiveMusic</Link></li>
       <li>  <Link to='/computerProgramming' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer Programing</Link></li>
        <li> <Link to='/computerKeyboard' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer KeyBoard</Link></li>
        <li> <Link to='/games' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Games</Link></li>
        <li> <Link to='/comedy' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Comedy</Link></li>

          
         
   </ul>

  )

}

export default Tags