
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Thumbnail, Button, Body, CardItem, Item, Input, Label, Text } from "native-base";
import { ImagePicker} from 'expo';
import * as Permissions from 'expo-permissions';

export default class Actualizar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      image: null
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Container>
        <ImageBackground source={require('../assets/picks/fondo3.jpg')} style={styles.img}>

          <Content >

            <CardItem style={styles.nati}>

              <Thumbnail source={{ uri: 'Image URL' }} />
              <Body>


                <Item fixedLabel>
                  <Label style={styles.titulos} >Nombre Producto</Label>
                  <Input placeholder="Ingrese el Nombre" />
                </Item>

              </Body>

            </CardItem>

            <CardItem style={styles.detalle}>
              <Body>
                <Item fixedLabel last>
                  <Label style={styles.titulos1}>Detalles</Label>
                  <Input placeholder="Detalles" />
                </Item>

                <Item fixedLabel last>
                  <Label style={styles.titulos1}>Precio</Label>
                  <Input style={styles.inputs} placeholder="Ingrese Precio" />
                </Item>
                <Image style={styles.image} source={{ uri: this.state.image }} />
              </Body>
            </CardItem>
            <Button rounded style={styles.btn} onPress={this.selectPicture}>
              <Text style={styles.tex} >Galeria</Text>
            </Button>

            <Button rounded style={styles.btn2} onPress={this.takePicture}>
              <Text style={styles.tex} >Camara</Text>
            </Button>
            <CardItem style={styles.picture}>
              <Body>
                <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
              </Body>
            </CardItem>

          </Content>
        </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({


  img: {
    flex: 1,

    flexDirection: 'column',

  },

  container: {
    backgroundColor: '#646668',
    height: 70,
  },

  font: {
    color: '#64CFEE',
    fontSize: 30,
    left: 30,
    top: 6,
  },



  nati: {
    flex: 1,

    height: 100,
    top: 20,
    backgroundColor: '#D0D6D8',
    opacity: 0.8,
    borderRadius: 50,


  },

  picture: {
    flex: 1,

    height: 300,
    marginTop: 3,
    top: -90,

  },

  detalle: {
    flex: 1,

    height: 200,
    marginTop: 25,
    backgroundColor: '#D0D6D8',
    opacity: 0.8,
    borderRadius: 50,


  },

  titulos: {
    fontSize: 20,
    color: '#0E43AD',

  },

  titulos1: {
    fontSize: 20,
    color: '#0E43AD',


  },

  btn: {

    marginRight: '60%',
    marginLeft: '10%',
    backgroundColor: '#646668',
    top: -70,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btn2: {

    marginRight: '15%',
    marginLeft: '50%',
    backgroundColor: '#096A8C',

    top: -115,
    justifyContent: 'center',
    alignItems: 'center',
  },


})    
