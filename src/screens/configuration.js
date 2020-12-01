import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%", justifyContent: 'center', alignItems:'center'}}>
                <Image source ={require('../images/logo.png')}
                    resizeMode = "contain"
                    style={{width:"50%",height:"50%"}}
                />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="at" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                <Icon name="key" color="#00716F" size={24}/>
                <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                
                <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                <View style={{
                    backgroundColor:"rgba(255,38,74,0.6)",
                    height:40,
                    borderColor:"transparent",
                    borderWidth:0,
                    borderRadius:23,
                    marginBottom:5,
                    paddingVertical:10,
                    paddingHorizontal:10,
                    marginTop:15,
                }}>
                    <Text style={{
                        color:"white",
                    }}>Registrarse</Text>
                </View>
            </View>
        )
    }
}