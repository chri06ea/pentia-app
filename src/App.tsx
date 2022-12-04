import React from 'react';
import {StatusBar} from 'react-native';
import FadeInOverlay from './components/FadeInOverlay';
import Login from './screens/login';
import Chat from './screens/chat';

export default function App() {
  const overlayStyle = {flex: 1};
  const isLoggedIn = true;
  return (
    <FadeInOverlay style={overlayStyle}>
      {isLoggedIn ? <Chat /> : <Login />}
      <StatusBar hidden />
    </FadeInOverlay>
  );
}
