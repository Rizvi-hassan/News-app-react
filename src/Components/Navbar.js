import React, { Component } from 'react'
import logo from './../brand.png'
import { Link, useNavigate } from "react-router-dom";

class WithNavigate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.trim() !== "") {
      await this.props.changeSearch(this.state.value);
      this.props.navigate('search');
    }
  }

  removeFocus = () => {
    const items = document.getElementsByClassName('nav-link');
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
  }

  changeFocus = (child) => {
    this.removeFocus()
    const element = document.getElementsByClassName('nav-link')[child];
    element.classList.add('active');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', zIndex: '1', width: '100%' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="News Panda-The best news app"><img id="brand" src={logo} alt="error" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" onClick={() => { this.changeFocus(0) }} to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(1) }} to="business">Business</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(2) }} to="entertainment">Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(3) }} to="health">Health</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(4) }} to="science">Science</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(5) }} to="sports">Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link" onClick={() => { this.changeFocus(6) }} to="technology">Technology</Link> </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={this.handleSubmit} >
              <input className="form-control me-2" type="search" value={this.state.value} onChange={this.handleChange} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

function Navbar(props) {
  let navigate = useNavigate();
  return <WithNavigate changeSearch={props.changeSearch} navigate={navigate} />
}

export default Navbar