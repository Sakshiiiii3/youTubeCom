
// import React,{useState} from 'react';
// import './App.css';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Body from './components/body';
// import Feed from './components/Feed';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import Music from './components/Music';
// import LiveMusic from './components/LiveMusic';
// import ComputerKeyboard from './components/ComputerKeyboard';
// import ComputerProgramming from './components/ComputerProgramming';
// import Games from './components/Games';
// import Comedy from './components/Comedy';


 
  


// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
  
 
//     const [showSidebar, setShowSidebar] = useState(true);
  
//     const toggleSidebar = () => {
//       setShowSidebar(!showSidebar);
//     };

    

//     const videos = [
//       { id: 1, title: 'Youtube clone using react js and tailwind', author: 'Sakshi Rajput', views: '1.1M views . 1 year ago', imageUrl: 'https://wallpapercave.com/wp/wp6564061.png' },
//       { id: 2, title: 'Youtube Music', author: 'Sakshi Rajput', views: '500K views . 6 months ago', imageUrl: 'https://assets.visme.co/templates/banners/thumbnails/i_Understanding-Music-Youtube-Video-Cover_full.jpg' },
//       { id: 3, title: 'Youtube Live Music', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://learn.canva.com/wp-content/uploads/2020/05/albumcover-image3-1-e1591633034403.jpg' },
//       { id: 4, title: 'Youtube Programmimg', author: 'Sakshi Rajput', views: '1.1M views . 1 year ago', imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/410/877/non_2x/programming-and-coding-futuristic-banner-vector.jpg' },
//       { id: 5, title: 'Youtube Keyboard', author: 'Sakshi Rajput', views: '500K views . 6 months ago', imageUrl: 'https://cdn.shopify.com/s/files/1/2589/5096/products/Keyboard_Cover_Hot_Pink_Rolled.jpg?v=1607452573' },
//       { id: 6, title: 'Youtube Games', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://cdn.dribbble.com/users/5631952/screenshots/13143401/i_will_design_creative_and_unique_gaming_youtube_banner_for_you__4x.jpg' },
//       { id: 7, title: 'Youtube Comedy', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://i.ytimg.com/vi/nHyX31246mA/maxresdefault.jpg' },
//       // Add mo
//       // Add more video objects as needed
//     ];

//     const filteredResults = videos.filter(item =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     const handleSearchInputChange = (e) => {
//       setSearchQuery(e.target.value);
//     };

//   return (
//     <div className="App">
//       <Router>
//       <header className='p-5 flex item-center'>
//       <button onClick={toggleSidebar} > 

//       <img className='w-7 h-6' alt = "" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/></button>
//       <img className='h-6 ml-4' alt = "" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"/>
//       <input placeholder='Search'  value={searchQuery}
//         onChange={handleSearchInputChange} className='p-3 border h-10 mx-auto w-1/2 rounded-3xl'  />
//       <img className='h-8' alt = "" src = "https://cdn2.iconfinder.com/data/icons/user-solid-style/32/user_people_human-512.png" />
//     </header>
//         <div className='flex pt-2'> 
//         {showSidebar && <Sidebar />} 
//           {/* <Sidebar  /> */}
//           <div className='w-full'>
//             <ul className='flex list-style-type: none'>
//               <li><Link to='/' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>All</Link></li>
//               <li><Link to='/music' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Music</Link></li>
//               <li><Link to='/liveMusic' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>LiveMusic</Link></li>
//               <li><Link to='/computerProgramming' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer Programming</Link></li>
//               <li><Link to='/computerKeyboard' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer Keyboard</Link></li>
//               <li><Link to='/games' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Games</Link></li>
//               <li><Link to='/comedy' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Comedy</Link></li>
//              </ul>


//              <div className="flex flex-wrap justify-around">
//         {filteredResults.map(video => (
//           <div key={video.id} className="m-3">
//             <div className="p-2">
//               <img className="rounded-3xl w-1/3" alt="" src={video.imageUrl} />
//               <div className="flex justify-between">
//                 <h3 className="font-bold mt-2 text-left">{video.title}</h3>
//               </div>
//               <h4 className="mt-2 text-gray-500 mt-2 text-left">{video.author}</h4>
//               <h4 className="m text-gray-500 text-left">{video.views}</h4>
//             </div>
//           </div>
//         ))}
//       </div>

         
            
//              <Routes>
//           <Route  exact path='/' element={<Feed />} />
//           <Route exact path='/music' element={<Music />} />
//           <Route exact path='/liveMusic' element={<LiveMusic />} />
//           <Route exact path='/computerProgramming' element={<ComputerProgramming />} />
//           <Route exact path='/computerKeyboard' element={<ComputerKeyboard />} />
//           <Route exact path='/games' element={<Games />} />
//           <Route exact path='/comedy' element={<Comedy />} />
//         </Routes>
//           </div>
//         </div>

        

//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Music from './components/Music';
import LiveMusic from './components/LiveMusic';
import ComputerKeyboard from './components/ComputerKeyboard';
import ComputerProgramming from './components/ComputerProgramming';
import Games from './components/Games';
import Comedy from './components/Comedy';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const videos = [
    { id: 1, title: 'Youtube clone using react js and tailwind', author: 'Sakshi Rajput', views: '1.1M views . 1 year ago', imageUrl: 'https://wallpapercave.com/wp/wp6564061.png' },
    { id: 2, title: 'Youtube Music', author: 'Sakshi Rajput', views: '500K views . 6 months ago', imageUrl: 'https://assets.visme.co/templates/banners/thumbnails/i_Understanding-Music-Youtube-Video-Cover_full.jpg' },
    { id: 3, title: 'Youtube Live Music', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://learn.canva.com/wp-content/uploads/2020/05/albumcover-image3-1-e1591633034403.jpg' },
    { id: 4, title: 'Youtube Programmimg', author: 'Sakshi Rajput', views: '1.1M views . 1 year ago', imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/410/877/non_2x/programming-and-coding-futuristic-banner-vector.jpg' },
    { id: 5, title: 'Youtube Keyboard', author: 'Sakshi Rajput', views: '500K views . 6 months ago', imageUrl: 'https://cdn.shopify.com/s/files/1/2589/5096/products/Keyboard_Cover_Hot_Pink_Rolled.jpg?v=1607452573' },
    { id: 6, title: 'Youtube Games', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://cdn.dribbble.com/users/5631952/screenshots/13143401/i_will_design_creative_and_unique_gaming_youtube_banner_for_you__4x.jpg' },
    { id: 7, title: 'Youtube Comedy', author: 'Jane Smith', views: '800K views . 2 years ago', imageUrl: 'https://i.ytimg.com/vi/nHyX31246mA/maxresdefault.jpg' },
    // Add more video objects as needed
  ];

  const filteredResults = videos.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <header className='p-5 flex item-center'>
          <button onClick={toggleSidebar}>
            <img className='w-7 h-6' alt="" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png" />
          </button>
          <img className='h-6 ml-4' alt="" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" />
          <input
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchInputChange}
            className='p-3 border h-10 mx-auto w-1/2 rounded-3xl'
          />
          <img className='h-8' alt="" src="https://cdn2.iconfinder.com/data/icons/user-solid-style/32/user_people_human-512.png" />
        </header>
        <div className='flex pt-2'>
          {showSidebar && <Sidebar />}
          <div className='w-full'>
            <ul className='flex list-style-type: none'>
              <li><Link to='/' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>All</Link></li>
              <li><Link to='/music' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Music</Link></li>
              <li><Link to='/liveMusic' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>LiveMusic</Link></li>
              <li><Link to='/computerProgramming' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer Programming</Link></li>
              <li><Link to='/computerKeyboard' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Computer Keyboard</Link></li>
              <li><Link to='/games' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Games</Link></li>
              <li><Link to='/comedy' className='bg-gray-200 px-2 py-1 rounded-md mx-3'>Comedy</Link></li>
            </ul>

            {searchQuery.length > 0 && (
              <div className="flex flex-wrap justify-around">
                {filteredResults.map(video => (
                  <div key={video.id} className="m-3">
                    <div className="p-2">
                      <img className="rounded-3xl w-1/3" alt="" src={video.imageUrl} />
                      <div className="flex justify-between">
                        <h3 className="font-bold mt-2 text-left">{video.title}</h3>
                      </div>
                      <h4 className="mt-2 text-gray-500 mt-2 text-left">{video.author}</h4>
                      <h4 className="m text-gray-500 text-left">{video.views}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Routes>
              <Route exact path='/' element={<Feed />} />
              <Route exact path='/music' element={<Music />} />
              <Route exact path='/liveMusic' element={<LiveMusic />} />
              <Route exact path='/computerProgramming' element={<ComputerProgramming />} />
              <Route exact path='/computerKeyboard' element={<ComputerKeyboard />} />
              <Route exact path='/games' element={<Games />} />
              <Route exact path='/comedy' element={<Comedy />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
