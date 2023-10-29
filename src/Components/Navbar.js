import React, { useState } from 'react'
import logo from './../brand.png'
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {

  const navigate = useNavigate();
  const [state, setState] = useState({value:''})

  const handleChange = (event)=> {
    setState({ value: event.target.value });
  }

  const handleSubmit = async(event)=> {
    event.preventDefault();
    if (state.value.trim() !== "") {
      await props.changeSearch(state.value);
      navigate('search');
    }
  }

  const removeFocus = () => {
    const items = document.getElementsByClassName('nav-link');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }

  const changeFocus = (child) => {
    removeFocus()
    const element = document.getElementsByClassName('nav-link')[child];
    element.classList.add('active');
  }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', zIndex: '1', width: '100%' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="News Panda-The best news app"><img id="brand" src={logo} alt="error" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" onClick={() => { changeFocus(0) }} to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(1) }} to="business">Business</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(2) }} to="entertainment">Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(3) }} to="health">Health</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(4) }} to="science">Science</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(5) }} to="sports">Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { changeFocus(6) }} to="technology">Technology</Link> </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit} >
              <input className="form-control me-2" type="search" value={state.value} onChange={handleChange} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}


export default Navbar