import React from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AllContactsScreen extends React.Component {
	static navigationOptions = () => ({
		tabBarIcon: ({ tintColor }) => (
      <Icon name="globe" size={23} color="#fafafa" />
    ),
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
