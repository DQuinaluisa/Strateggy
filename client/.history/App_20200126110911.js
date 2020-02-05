import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Navigator from './routes/login';


export default function App() {
  return (
    <Navigator/>
  );
}
