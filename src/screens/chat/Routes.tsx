import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Groupchat from './screens/groupchat';
import Lobby from './screens/lobby';

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
