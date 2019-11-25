import React from 'react';
import { Icon } from 'react-native-elements';


import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
        } from "react-navigation";

 //screems
 
 import HomeScreen from "../screens/Home";
 import ClientesScreen from "../screens/Clientes";
 import MyAccountScreen from "../screens/MyAccount/MyAccount";
 import ProductosScreen from "../screens/Productos";
 import SearchScreen from "../screens/Search";
 import RegisterScreen from "../screens/MyAccount/Register";

 const HomeScreenStack = createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({ navigation }) =>({
            title:"Inicio"
        })
    } 
 });
 const ClientesScreenStack = createStackNavigator({
    clientes:{
        screen:ClientesScreen,
        navigationOptions:({ navigation }) =>({
            title:"Clientes"
        })
    } 
 });
 const MyAccountScreenStack = createStackNavigator({
    MyAccount:{
        screen:MyAccountScreen,
        navigationOptions:({navigation})=>({
            title:"Usuario"
        })
    },
    Register:{
        screen:RegisterScreen,
        navigationOptions:({navigation})=>({
            title:'Registro'
        })
    }
 });
 const ProductosScreenStack = createStackNavigator({
    Productos:{
        screen:ProductosScreen,
        navigationOptions:({ navigation }) =>({
            title:"Productos"
        })
    } 
 });
 const SearchScreenStack = createStackNavigator({
    Search:{
        screen:SearchScreen,
        navigationOptions:({ navigation }) =>({
            title:"Buscar"
        })
    } 
 });

 const RootStack = createBottomTabNavigator({
     Home:{
         screen: HomeScreenStack,
         navigationOptions:({ navigation }) =>({
             title:"Inicio",
             tabBarIcon: ({tintColor}) =>( <Icon name='compass-outline'
                                                type="material-community" size={22} color={tintColor}/>
            )
         })
     },
     cliente:{
         screen: ClientesScreenStack,
         navigationOptions:({ navigation }) => ({
             title: "Clientes",
             tabBarIcon: ({tintColor}) => (
                 <Icon name='account-group'
                 type="material-community" size={22} color={tintColor}/>
             )
         })
     },

     MyAccount:{
         screen: MyAccountScreenStack,
         navigationOptions:({ navigation }) =>({
             title: "Mi Cuenta",
             tabBarIcon: ({tintColor})=>(
                 <Icon name="account-check-outline"
                        type="material-community" size={22} color={tintColor}/>
             )
         })
     },

     Producto:{
        screen: ProductosScreenStack,
        navigationOptions:({ navigation }) =>({
            title: "Productos",
            tabBarIcon: ({tintColor})=>(
                <Icon name="toolbox-outline"
                       type="material-community" size={22} color={tintColor}/>
            )
        })
    },
    Search:{
        screen:SearchScreenStack,
        navigationOptions:  ({ navigation}) => ({
            title:"Buscador",
            tabBarIcon: ({tintColor})=>(
                <Icon name="magnify"
            type="material-community" size={22} color={tintColor}/>
            )
            
        })
    }
 },
 {
initialRouteName:'MyAccount',
order:["Home","MyAccount","cliente",'Producto','Search'],
tabBarOptions: {
    inactiveTintColor:"#646464",
    activeTintColor:"#00a685"
}
 });

 export default createAppContainer(RootStack);