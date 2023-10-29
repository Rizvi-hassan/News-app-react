import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import Search from './Components/Search';
import Error404 from './Components/Error404';

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const apiKey = process.env.REACT_APP_NEWS_API


  const changeSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar changeSearch={changeSearch} />
        <Routes>
          <Route path='/' element={<News key="general" apiKey={apiKey} category='general' />} />
          <Route path='business' element={<News key="business" apiKey={apiKey} category="business" />} />
          <Route path='entertainment' element={<News key="entertainment" apiKey={apiKey} category="entertainment" />} />
          <Route path='health' element={<News key="health" apiKey={apiKey} category="health" />} />
          <Route path='science' element={<News key="science" apiKey={apiKey} category="science" />} />
          <Route path='sports' element={<News key="sports" apiKey={apiKey} category="sports" />} />
          <Route path='technology' element={<News key="technology" apiKey={apiKey} category="technology" />} /> */
          <Route path='search' element={<Search key={searchValue} apiKey={apiKey} question={searchValue} />} />
          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


