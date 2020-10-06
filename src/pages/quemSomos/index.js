import React, { Component } from 'react'

import Html5 from '../../assets/img/html5.png'
import Css3 from '../../assets/img/css-3.png'
import javaScript from '../../assets/img/javaScript.png'
import react from '../../assets/img/react.png'
import Edesildo from '../../assets/img/edesildo.jpeg'
import Iara from '../../assets/img/iara.jpeg'
import Gabriel from '../../assets/img/gabriel.jpeg'
import Jessica from '../../assets/img/jessica.jpeg'
import Design from '../../assets/img/design.png'

import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.css'

export default class Perfil extends Component {
  render () {
    return (

      <div className='conteiner'>
        <Header />
        <div className='box'>
          <div className='box1'>
            <h1>Conheça o time de Desenvolvedores</h1>
            <p className='paragrafo'>Front-end Jr's sejam todxs bem vindxs.</p>

          </div>
          <div className='box2'>
            {' '}
            <img id='foto1' src={Design} />
          </div>
        </div>
        <main className='cursos'>
          <div className='caixa1-2'>
            <div className='caixa1'>
              <div className='texto1' />
            </div>
            <div className='caixa2'>
              <div className='texto2'>
                <h3>Tecnologias Usadas</h3>
              </div>
            </div>
          </div>
          <section className='caixa3-4-5-6'>
            <div className='caixa3'>
              <div className='icon1'>
                <img className='iconi' src={Html5} />
                <h3>HTML</h3>
              </div>
            </div>
            <div className='caixa4'>
              <div className='icon1'>
                <img className='iconi' src={Css3} />
                <h3>CSS</h3>
              </div>
            </div>
            <div className='caixa5'>
              <div className='icon1'>
                <img className='iconi' src={javaScript} />
                <h3>JAVA_SCRIPT</h3>
              </div>
            </div>
            <div className='caixa6'>
              <div className='icon1'>
                <img className='iconi' src={react} />
                <h3>REACT</h3>
              </div>
            </div>
          </section>
        </main>

        <section id='sobreMim'>
          <div className='user1'>
            <img id='foto' src={Edesildo} />
            <button className='bntc'>Curriculo</button>
            <a target='_black' href='https://github.com/Edesildo'>
              <button className='botao'>Portifólio</button>
            </a>
          </div>
          <div className='user2'>
            <img id='foto' src={Iara} />
            <button className='bntc'>Curriculo</button>
            <a target='_black' href='https://github.com/iarawatson2'>
              <button className='botao'>Portifólio</button>
            </a>
          </div>
          <div className='user3'>
            <img id='foto' src={Gabriel} />
            <button className='bntc'>Curriculo</button>
            <a target='_black' href='https://github.com/Gabriel-antoni'>
              <button className='botao'>Portifólio</button>
            </a>
          </div>
          <div className='user4'>
            <img id='foto' src={Jessica} />
            <button className='bntc'>Curriculo</button>
            <a target='_black' href=''>
              <button className='botao'>Portifólio</button>

            </a>
          </div>
        </section>
        <Footer />

      </div>
    )
  }
}
