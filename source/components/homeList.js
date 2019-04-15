import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import Lista from './lista';

class HomeList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					key:1,
					title:'Prato Executivo',
					img:require('../assets/tipos/pe.png'),
					description: 'Pratos já prontos.',
					bg: '#e35339',
					products:[
						{key:1, name:'Prato de Frango', img:require('../assets/cardapio/pe/executivos_frang_.png')},
						{key:2, name:'Prato de Peixe', img:require('../assets/cardapio/pe/executivos_peix_.png')},
						{key:3, name:'Prato de Picanha', img:require('../assets/cardapio/pe/executivos_picanh_.png')}
					]
				},
				{
					key:2,
					title:'Saladas',
					img:require('../assets/tipos/saladas.png'),
					description: 'Pratos Saudáveis.',
					bg: '#a6bb24',
					products:[
						{key:1, name:'Salada de Frango', img:require('../assets/cardapio/saladas/salada-fr.png')},
						{key:2, name:'Salada de Água Doce', img:require('../assets/cardapio/saladas/salada_aguadoc_.png')},
						{key:3, name:'Salada de Salmão', img:require('../assets/cardapio/saladas/salada_salma.png')}
					]
				},
				{
					key:3,
					title:'Bebidas',
					img:require('../assets/tipos/bebidas.png'),
					description: 'Bebidas',
					bg: '#079ed4',
					products:[
						{key:1, name:'Caipirosca', img:require('../assets/cardapio/bebidas/capirosc_3.png')},
						{key:2, name:'Cookie Cream', img:require('../assets/cardapio/bebidas/cookies_crea.png')},
						{key:3, name:'Morango GD', img:require('../assets/cardapio/bebidas/morango_gd.png')},						
						{key:4, name:'patra', img:require('../assets/cardapio/bebidas/patra.png')},
						{key:5, name:'Suco Fitness', img:require('../assets/cardapio/bebidas/suco_fitines_gd.png')}
					]
				},
				{
					key:4,
					title:'Sobremesas',
					img:require('../assets/tipos/sobremesa.png'),
					description: 'Sobremesa Delícias.',
					bg:'#fcb81c',
					products:[
						{key:1, name:'Brownie', img:require('../assets/cardapio/sobremesas/brownie_gd.png')},
						{key:2, name:'Creme Papaya', img:require('../assets/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
						{key:3, name:'Delicia Gelada', img:require('../assets/cardapio/sobremesas/delicia_gelada_gd.png')}
					]
				}
			]
		};
	}

	static navigationOptions = {
		title:'Restaurante XYZ',
		tabBarLabel:'Home',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return(
					<Image source={required('../assets/home_azul.png')} style={styles.icone} />
				);			
			} else {
				return (
					<Image source={required('../assets/home_preto.png')} style={styles.icone} />
				);
			}
		}
	};
	
	render(){
		return(
			<View>				
				<FlatList 
					data={this.state.list}
					renderItem={({item}) => <Lista data={item} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon:{
		width:26,
		height:26
	},	
	container:{
		flex:1,
	}
})

export default HomeList;