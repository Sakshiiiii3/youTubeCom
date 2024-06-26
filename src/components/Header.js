import React ,{useState} from 'react'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    
  };

 
    const [showSidebar, setShowSidebar] = useState(true);
  
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  

  // const [sidebarOpen, setSidebarOpen] = useState(true);
  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };
  return (
    <header className='p-5 flex item-center'>
      <button onClick={toggleSidebar} > 
      <img className='w-7 h-6' alt = "" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/></button>
      <img className='h-6 ml-4' alt = "" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"/>
      <input placeholder='Search'  value={searchQuery}
  onChange={handleSearchInputChange} className='p-3 border h-10 mx-auto w-1/2 rounded-3xl'  />
      <img className='h-8' alt = "" src = "https://cdn2.iconfinder.com/data/icons/user-solid-style/32/user_people_human-512.png" />
    </header>
  )
}

export default Header