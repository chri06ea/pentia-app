import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Chatrooms from './screens/chatrooms';
import Groupchat from './screens/groupchat';

const Stack = createNativeStackNavigator<RootParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chatrooms"
          component={Chatrooms}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Groupchat"
          component={Groupchat}
          options={({route}) => ({title: route.params.roomName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type RootParamList = {
  Chatrooms: undefined;
  Groupchat: {roomName: string};
};

export type GroupchatRouteProps = RouteProp<RootParamList, 'Groupchat'>;

export type ChatroomsScreenNavigationProps = ChatNavigationProps<'Chatrooms'>;

export type GroupScreenNavigationProps = ChatNavigationProps<'Groupchat'>;

export type ChatNavigationProps<T extends keyof RootParamList> =
  NativeStackNavigationProp<RootParamList, T>;
