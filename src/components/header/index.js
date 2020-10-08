import React, { Component } from 'react'
import { Link} from 'react-router-dom'
//import { withRouter } from "react-router";


import NobleLogo from '../../assets/img/nobleLogo.png'

import './style.css'

 class Header extends Component {
  
  state={
    texto:''
  }
  pesquisarAmigo =(event)=>{
   /* this.props.history.push({
    pathname:'/lista',
    state:{texto:this.state.texto}})
  */
   
  this.props.history.push('/login')
 
  }

  render () {
    
    return (
      <div className='App'>
        <header>
          <div className="fluid-container nav">
            <div className='logoHeader'>
              <img id='logo' src={NobleLogo} />
            </div>
              <div className="search-bar">
                <input  type='text' id='texto' className='search' onChange={(event) => this.setState({ texto: event.target.value })} 
                type='text' placeholder='Pesquisar Amigos'/>
                <button id='btn_pesquisa' onClick={this.pesquisarAmigo}>Pesquisar</button>
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
//export default  withRouter(Header);
export default Header;