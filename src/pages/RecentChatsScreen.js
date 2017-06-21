import React from 'react';
import { Text, View, Button } from 'react-native';

export default class RecentChatsScreen extends React.Component {
  render() {
    return(
    	<View>
    		<Text>List of recent chats</Text>
    		<Button 
					onPress={() => this.props.navigation.navigate('Chat', {user: 'Martina'})}
					title= "Chatea con Martina"
				/>
    	</View>
    	)

    
  }
}
