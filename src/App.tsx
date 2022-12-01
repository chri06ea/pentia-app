import React from 'react';
import {StatusBar} from 'react-native';
import FadeInOverlay from './components/FadeInOverlay';
import LoginScreen from './screens/login';
import ChatroomsScreen from './screens/chatrooms';

export default function App() {
  const overlayStyle = {flex: 1};
  const isLoggedIn = false;
  return (
    <FadeInOverlay style={overlayStyle}>
      {isLoggedIn ? <ChatroomsScreen /> : <LoginScreen />}
      <StatusBar hidden />
    </FadeInOverlay>
  );
}
