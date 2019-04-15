import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

class ContatoScreen extends Component {

	static navigationOptions = {
		tabBarLabel:'Contato',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return(
					<Image source={required('../assets/contato_azul.png')} style={styles.icone} />
				);			
			} else {
				return (
					<Image source={required('../assets/contato_preto.png')} style={styles.icone} />
				);
			}
		}
	};
	
	render(){
		return(
			<View>
				<Text> </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon:{
		width:26,
		height:26
	},
})

export default ContatoScreen;