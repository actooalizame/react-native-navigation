import React from 'react';
import { Text, View, Button } from 'react-native';

export default class AllContactsScreen extends React.Component {
	static navigationOptions = () => ({
  });
  render() {
    return (
    	<View>
    		<Text>List of all contacts</Text>
		    <Button 
					onPress={() => this.props.navigation.navigate('Chat', {user: 'Juana'})}
					title= "Chatea con Juana"
				/>
    	</View>
    	)
  }
}
