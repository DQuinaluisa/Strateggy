import React, { Component } from 'react';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Card, CardItem,  Text, Button, Icon, Left, Body, Title, Right } from 'native-base';

const url = "http://192.168.100.12:3000/server/ubication"

export default class Inicio extends Component {

  state = {
    fontLoaded: false,
    empresas: {}
  };

   

    async componentDidMount() {
        await Font.loadAsync({
            'lob-font': require('../assets/fonts/Lobster-Regular.ttf'),
            'sat-font': require('../assets/fonts/Satisfy-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

  getEmpresa() {

    const header = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
    }
  return fetch('http://localhost:3000/server/procesar',header)
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.empresas);
    })
    .catch((error) => {
      console.error(error);
    });
}
 
  render() {
 
    return (
      <Container>
         
            <Header noLeft style={styles.container}>
           
            
           
          <Body>
            <Title style={styles.font}>Inicio</Title>
          </Body>
        
        </Header>
            <Content >
              
                <CardItem style={styles.nati}>
                  <Left>
                    
                    <Body>
                      <Text style={styles.titulos} > SILLA</Text>
                      
                    </Body>
                  </Left>
                </CardItem>
                
                  <Body>
                    <Image source={require('../assets/picks/silla.jpg')} style={{ height: 250, width: 150, flex: 1, top: 40, }} />
                    <Text style={styles.titulos}>
                    
                    </Text>
                  </Body>
                
                <CardItem style={styles.detalle}>
                  <Left>
                   
                      <Button  rounded  style={ styles.btn1 } onPress={this.getEmpresa}>
                      <Text>FEDEX</Text>
                    </Button>
                    
                    <Button  rounded  style={ styles.btn2 } onPress={this.getEmpresa}>
                      <Text>C.Ecuador</Text>
                    </Button>
                    
                    <Button  rounded  style={ styles.btn3 } onPress={this.getEmpresa}>
                      <Text>Servientrega</Text>
                    </Button>
                   
                  </Left>
                </CardItem>
             
            </Content>
          
      </Container>
    );
  }
}
const styles = StyleSheet.create({
 

     img : {
      flex: 1,   
      
      flexDirection: 'column',

    },

    container :{
      backgroundColor : '#fff',
      height: 70,
    },

    font : {
      color : '#64CFEE',
      fontSize: 30,
      left: 125,
      top : 7,
    },
   
   

    nati :  {
       flex : 1,
       position: 'relative',
       height: 100,
       top: 20,
       backgroundColor:'#E6EEF1',
        opacity: 0.8,
        borderRadius: 50,
    
      
    },

    picture : {
       flex : 1,
       position: 'relative',
        height: 300,
         marginTop: 4,
        top: 20,
        
     },

      detalle : {
        flex : 1,
         position: 'relative',
         height: 230,
         marginTop: 20,
         backgroundColor:'#E6EEF1',
        opacity: 0.8,
        borderRadius: 50,
    
        
     },
    
    titulos : {
      fontSize: 30,
      color : '#64CFEE',
      left : 100,
    },
      btn1: {
        marginTop: '1%',
        marginRight: '10%',
        marginLeft: '40%',
        backgroundColor: '#26C196',
        
        top: -70,
        justifyContent: 'center',
        alignItems: 'center',

    },
     btn2: {
        position : 'relative',
         marginTop: '5%',
        marginRight: '-70%',
        marginLeft: '-5%',
        backgroundColor: '#26C196',
        right: 100,
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',

    },
     btn3: {
      position : 'relative',
        marginTop: '5%',
        marginRight: '-70%',
        marginLeft: '-2%',
        backgroundColor: '#26C196',
        left : 15,

        top: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

  })    
