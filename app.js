import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import ChatScreen from './src/pages/ChatScreen';

const femoglas = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('femoglas', () => femoglas);
