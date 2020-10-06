import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import Angular from '../../assets/img/angular.png'
import Vue from '../../assets/img/vue.png'
import tecMundo from '../../assets/img/tecMundo.png'
import Tistatorn from '../../assets/img/tistatorn.png'
import Channel from '../../assets/img/chanel.jpg'
import Amorim from '../../assets/img/amorimTecnologia.jpg'
import Found from '../../assets/img/foundation.jpg'

import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.css'


export default class Feed extends Component {
  render () {
    return (
    <>
      <Header/>
     <div className='container-post fluid-container'>
       
        <div className='post-header'>
          <h1>Feed</h1>
        </div>

        <div className='post-wrap'>
          
        <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={tecMundo} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>
            <div className='user-post-img'>
              <img src={tecMundo} alt='post'/>
              <div className='post-actions'>
              <span>
              <i className='material-icons'>
              <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
            </div>
            </div>
          </div>

          <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Tistatorn} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Tistatorn} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Angular} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Angular} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>
    
      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Vue} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Vue} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Channel} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Channel} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Amorim} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Amorim} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

      <div className='post-box'>
            <div className='user-post-header'>
              <div className='user-post-profile-pic'>
                <img src={Found} alt='' />
                  <div className='user-post-info'>
                    <span>TecMundo</span>
                    <span className='post-time'>53 min</span>
                  </div>
              </div>
            </div>
            <p className='post-message'>
              Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento
              de interfaces de usuário e aplicativos de página única.
            </p>

          <div className='user-post-img'>
            <img src={Found} alt='' />

          <div className='post-actions'>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faThumbsUp} />
              </i> 
              curtir
            </span>
            <span>
              <i className='material-icons'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i> 
              comentar
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
  <Footer/>
  </>
    )
  }
}