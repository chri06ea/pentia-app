import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Groupchat from './screens/groupchat';
import Lobby from './screens/lobby';

const Stack = createNativeStackNavigator<ChatRoutes>();

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

export type ChatRoutes = {
  Lobby: undefined;
  Groupchat: {name: string};
};

export type ChatNavigationProps<T extends keyof ChatRoutes> =
  NativeStackNavigationProp<ChatRoutes, T>;

export type LobbyScreenNavigationProps = ChatNavigationProps<'Lobby'>;

export type GroupScreenNavigationProps = ChatNavigationProps<'Groupchat'>;
