import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import Search from './Components/Search';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: ''
    }
  }

    changeSearch = (value) =>{
      this.setState({
        searchValue: value
      })
      
    }
    componentDidMount(){
      console.log("working app")
    }

    
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar changeSearch={this.changeSearch}/>
          <Routes>
            <Route path='/' element={<News key="general" category='general' />}/>
            <Route path='business' element={<News key="business" category="business" />}/>
            <Route path='entertainment' element={<News key="entertainment" category="entertainment" />}/>
            <Route path='health' element={<News key="health" category="health" />}/>
            <Route path='science' element={<News key="science" category="science" />}/>
            <Route path='sports' element={<News key="sports" category="sports" />}/>
            <Route path='technology' element={<News key="technology" category="technology" />}/> */
            <Route path='search' element = {<Search key={this.state.searchValue} question={this.state.searchValue} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


