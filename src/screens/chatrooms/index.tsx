import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useAuth from '../../hooks/useAuth';
import useChatrooms from '../../hooks/useChatrooms';
import {GroupchatRouteProps} from '../../Routes';
import ChatroomCard from './components/ChatroomCard';

export default function Chatrooms() {
  const navigation = useNavigation();
  const {rooms} = useChatrooms();
  const {logout} = useAuth();
  const handleChatroomClick = (chatroom: typeof rooms[0]) => {
    navigation.push('Groupchat', {roomName: chatroom.name});
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Chatrum</Text>
      </View>
      <View style={styles.middle}>
        {rooms.map(room => (
          <TouchableOpacity
            key={room.name}
            onPress={() => handleChatroomClick(room)}>
            <ChatroomCard {...room} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.bottom} onPress={handleLogout}>
        <Text style={styles.logout_button_text}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
  },
  bottom: {
    borderWidth: 1,
    width: '100%',
    padding: 25,
    borderColor: 'gray',
    backgroundColor: 'rgba(1,1,1,0.05)',
  },
  logout_button_text: {
    textAlign: 'center',
    color: 'black',
  },
});
