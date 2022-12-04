import React from 'react';
import {StatusBar} from 'react-native';
import FadeInOverlay from './components/FadeInOverlay';
import useAuth from './hooks/useAuth';
import Login from './screens/login';
import Routes from './Routes';

export default function App() {
  const overlayStyle = {flex: 1};
  const {user} = useAuth();
  return (
    <FadeInOverlay style={overlayStyle}>
      {user != null ? <Routes /> : <Login />}
      <StatusBar hidden />
    </FadeInOverlay>
  );
}
