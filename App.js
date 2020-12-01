import React from 'react';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

export default class App extends React.Component {
  render(){
    return (
      
       <AppNavigator/>
      
    );
  }
}