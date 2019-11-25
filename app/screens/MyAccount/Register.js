import React, {Component} from "react";
import { StyleSheet, View } from "react-native";
import {Button} from "react-native-elements";
import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterStruct,RegisterOptions} from "../../forms/Register";
import * as firebase from 'firebase';


export default class Register extends Component{

    constructor(){
        super();
        this.state={
            registerStruct:RegisterStruct,
            registerOption:RegisterOptions,
            formData:{
                name:"",
                email:"",
                password:"",
                passwordConfirmation:""
            }
        }
    };

    register=()=>{

        const {password,passwordConfirmation}=this.state.formData;

        if (password === passwordConfirmation) {
            const validate = this.refs.registerForm.getValue();
            
            if (validate) {
                this.setState ({formErrorMessage:""});
                firebase.auth().createUserWithEmailAndPassword(validate.email, validate.password).then(resolver =>{
                    console.log('formulario correcto');
                }).catch(err => {
                    console.log('El email ya está en uso');
                })
                
            }else{
                console.log('formulario incorrecto');
                
            }
        }else{
            console.log('contraseñas incorrectas');
            
        }

       
        console.log(this.state.formData);
        
    };

    onChangFormRegister = formValue=>{
        this.setState({
            formData:formValue
        });
        
    }



    render(){
        const{registerStruct,registerOption}=this.state;
        return (
            <View style={styles.viewBody}>
                
                <Form ref="registerForm"
                 type={registerStruct} 
                 options={registerOption}
                 value={this.state.formData}
                 onChange={formValue => this.onChangFormRegister(formValue)}/>
                <Button title='Registrarse' onPress={()=> this.register()}  />
            </View>
        );
    }

 }
 const  styles = StyleSheet.create({
     viewBody:{
         flex:1,
         alignItems: "center",
         justifyContent: "center",
         backgroundColor:"#fff"
     }
 });
