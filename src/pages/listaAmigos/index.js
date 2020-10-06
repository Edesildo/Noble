import React, { Component } from 'react'

import Api from '../../../src/services/api';
import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.css'

export default class Lista extends Component {
  
  state = {
    pessoas:[]
  };

 componentDidMount(){
   this.carregarAmigos();
 }

 
 
 async carregarAmigos(){
   let response =await Api.get("/?results=20");
   let listAmigos=response.data.results;
 
   let arrayAmigos=[];
   for(let amigos of listAmigos){
     arrayAmigos.push({
      
      id:amigos.id,
      nome:amigos.name.first + " " + amigos.name.last ,
      imageUrl:amigos.picture.medium,
      nat:amigos.nat,
      idade:amigos.dob.age
      
     })
   }
   
   this.setState({pessoas:arrayAmigos});
   console.log(this.state.pessoas);
  }
  render(){

    return (
      
     <div className="container-Header">
       <Header/>
      
      <div className="container">
      
      {this.state.pessoas.map((item, index) => (
        
     
       <div id="caixa" key={index}>
          <img
            className="img-friends"
            src={item.imageUrl}
            alt={item.nome}
          />
          <div id="div-dados">
            <p id="nome">Username: {item.nome}</p>
            <br />
            <p id="idade">Idade: {item.idade}</p>
            <br />
          <p id="nacionalidade">Nacionalidade: {item.nat}</p><br></br>
         
          </div>        
          <div classNameName='friend-button-status'>
          <button>amigos</button>
          </div>
        </div>
        
      ))}
    </div>
    <Footer/>
    </div>
    
    )}}
