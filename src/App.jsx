import React from 'react'
import Home from './Home'
import Recipe from './Recipe'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import RecipeList from './RecipeList'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        
      </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App