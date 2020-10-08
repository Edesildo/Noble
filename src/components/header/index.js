import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from "react-router";


import NobleLogo from '../../assets/img/nobleLogo.png'

import './style.css'

 class Header extends Component {
  
  state={
    texto:''
  }
 

  render () {
    
    return (
      <div className='App'>
        <header>
          <div className="fluid-container nav">
            <div className='logoHeader'>
              <img id='logo' src={NobleLogo} />
            </div>
              
              <ul className="menu-links">
                <li><Link to='/feed'>Home</Link></li>
                <li><Link to='/lista'>Listar amigos</Link></li>
                <li><Link to='/quem-somos'>Quem Somos</Link></li>
                <li><Link to='/'>Sair</Link></li>
              </ul>
          </div>
         
        </header>
      </div>
    )
  }
}
export default  withRouter(Header);
