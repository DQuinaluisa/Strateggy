import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Inicio from '../screens/inicio';


const screens = {
   
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            headerShown: false,
        }
    }
  
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);