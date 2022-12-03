import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useChatrooms} from '../../hooks/useChatrooms';
import {ChatroomCard} from './ChatroomCard';

export default function ChatroomsScreen() {
  const {chatrooms} = useChatrooms();
  const handleChatroomClick = (chatroom: typeof chatrooms[0]) => {
    console.log(chatroom);
    setChatSelected(1);
  };
  const [chatSelected, setChatSelected] = useState<null | number>(null);
  if (chatSelected) {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }

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
      <View style={styles.bottom}>
        <Text>Logout</Text>
      </View>
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
