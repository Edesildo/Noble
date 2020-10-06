import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NobleLogo from '../../assets/img/nobleLogo.png'

import './style.css'

export default class Header extends Component {
  render () {
    return (
      <div className='App'>
        <header>
          <div className='logoHeader'>
            <img id='logo' src={NobleLogo} />
          </div>
          <div className='lista-header'>
            <ul>
              <li>
                <input className='search' type='text' placeholder='Pesquisar' />
                <button>Pesquisar</button>
              </li>
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
