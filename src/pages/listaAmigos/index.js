import React, { Component } from 'react'

import Api from '../../../src/services/api';
import Header from '../../components/header'
import Footer from '../../components/footer'

import './style.css'

export default class Lista extends Component {
  
  state = {
    pessoas:[],
    pessoasOriginal:[]
  };

 componentDidMount(){
   this.carregarAmigos();
   if(this.props && this.props.location 
      && this.props.location.state 
      && this.props.location.state.texto){
        let {texto}=this.props.location.state
        let pessoasPesquisadas=this.state.pessoasOriginal.filter
        (pessoa => pessoa.nome.indexOf(texto)>-1)
        this.setState({pessoas:pessoasPesquisadas})
      }
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
   
   this.setState({pessoas:arrayAmigos,pessoasOriginal:arrayAmigos});
   console.log(this.state.pessoas);
  }
  render(){

    return (
      
     <div className="container-Header">
       <Header/>
      
      <div className="fluid-container bg-white-and-flex">

      <div className='post-amigos'>
          <p className='amigos'>Amigos</p>
        </div>
      {this.state.pessoas.map((item, index) => (
        
     
       <div className="caixa" key={index}>
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
          <div className='friend-button-status'>
          <button>amigo</button>
          </div>
        </div>
        
      ))}
    </div>
    <Footer/>
    </div>
    
    )}}
