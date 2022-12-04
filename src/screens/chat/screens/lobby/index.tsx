import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useAuth from '../../../../hooks/useAuth';
import useChat from '../../../../hooks/useChat';
import {LobbyScreenNavigationProps} from '../../Routes';
import ChatroomCard from './components/ChatroomCard';

export default function Lobby() {
  const nav = useNavigation<LobbyScreenNavigationProps>();
  const {rooms} = useChat();
  const {logout} = useAuth();
  const handleChatroomClick = (chatroom: typeof rooms[0]) => {
    nav.push('Groupchat', chatroom);
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
        {rooms.map(chatroom => (
          <TouchableOpacity
            key={chatroom.name}
            onPress={() => handleChatroomClick(chatroom)}>
            <ChatroomCard {...chatroom} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.bottom} onPress={handleLogout}>
        <Text>Logout</Text>
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
    backgroundColor: 'lightblue',
  },
});
