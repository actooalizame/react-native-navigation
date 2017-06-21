import React from 'react';
import { Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Bienvenido',
	};
	render() {
		const {navigate} = this.props.navigation;
		return (
			<View>
				<Text>Hola Querido!</Text>
				<Button 
					onPress={() => navigate('Chat', {user: 'Coki'})}
					title= "Chatea con Javier"
				/>
			</View>
			)
	}
}