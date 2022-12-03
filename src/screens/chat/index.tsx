import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Chatroom from '../chatrooms/Chatroom';
import Lobby from './screens/lobby';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

export default function Chat() {
  return <Routes />;
}
