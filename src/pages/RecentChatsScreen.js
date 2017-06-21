import React from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RecentChatsScreen extends React.Component {
	static navigationOptions = () => ({
		tabBarIcon: ({ tintColor }) => (
      <Icon name="heart-o" size={23} color="#fafafa" />
    ),
  });
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
