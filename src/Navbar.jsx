import React from 'react'
import { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";

function Navbar() {
     const [searchTerm, setSearchTerm] = useState('');
    
  //   const navigate = useNavigate();
  
    function searchHandler(event) {
      setSearchTerm(event.target.value);
      console.log(event.target.value);
    }
    
    function search(){
      
    }
    function handleSearchClick() {
      // Do something with searchTerm, e.g., search
      console.log("Searching for:", searchTerm);
    }
  

    
  return (
    <div>
        <nav className="navbar">
            <div className="logo"> MyRecipes</div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/recipies">Recipes</a></li>
              {/* <li><a href="/favorites">Favorites</a></li> */}
              <li className='Search'>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={searchHandler}
                />
                <button type="button" onClick={handleSearchClick}>
                  <CiSearch className='search-icon' />
                </button>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar