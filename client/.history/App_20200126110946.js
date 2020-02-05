import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Navigator from './routes/login';


export default function App() {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  
  return (
    <Navigator/>
  );
}
