import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ChatroomCard from './components/ChatroomCard';
import {useChatrooms} from '../../../../hooks';
import {useNavigation} from '@react-navigation/native';

export default function Lobby() {
  const nav = useNavigation();
  const {chatrooms} = useChatrooms();
  const handleChatroomClick = (chatroom: typeof chatrooms[0]) => {
    nav.push('Groupchat', chatroom);
  };
  const handleLogout = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Chatrum</Text>
      </View>
      <View style={styles.middle}>
        {chatrooms.map(chatroom => (
          <TouchableOpacity
            key={chatroom.name}
            onPress={() => handleChatroomClick(chatroom)}>
            <ChatroomCard {...chatroom} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.bottom}>
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
