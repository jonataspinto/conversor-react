import React, { Component } from 'react'
import './Conversor.css'
import Button from '../components/button/Button'
import Input from './input/Input'

export default class Conversor extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }
        
        this.converter = this.converter.bind(this);
    }    
    
    converter(){
        let key = "&apiKey=69be51df57fca7a76853"
        let url = "http://free.currencyconverterapi.com/api/v5/convert?q="
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`
        fetch(url+de_para+'&compact=y'+key)
        .then(res =>{
            return res.json()
        })
        .then(res => {
            let cotacao = res[de_para].val
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_valor})
        })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <Input 
                onchange={(event) =>{this.setState({moedaA_valor: event.target.value})}}
                type="text"
                class="form-control"></Input>                
               
                <Button value="Converter" handleClick={this.converter} class="btn mt-2 btn-primary"></Button>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}