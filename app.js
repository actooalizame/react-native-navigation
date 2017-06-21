import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomeScreen';
import ChatScreen from './src/pages/ChatScreen';
import RecentChatsScreen from './src/pages/RecentChatsScreen';
import AllContactsScreen from './src/pages/AllContactsScreen';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
	}, {
		tabBarPosition: 'bottom',
		tabBarOptions: {
		  activeTintColor: '#0f0f0f',
		  showIcon: true,
		  labelStyle: {
		    fontSize: 13,
		  },
		  style: {
		    backgroundColor: 'blue',
		  },
		  showLabel: false
		}
		}
  );

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const femoglas = StackNavigator({
  Home: { screen: MainScreenNavigator  },
  Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('femoglas', () => femoglas);
