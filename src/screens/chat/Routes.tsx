import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Chatroom from '../chatrooms/Chatroom';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lobby from './screens/lobby';
import Groupchat from './screens/groupchat';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lobby"
          component={Lobby}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Groupchat"
          component={Groupchat}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
