import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ChatMessageCard from './components/ChatMessageCard';

const chatMessages = [
  {
    timestamp: new Date('2000-01-13T00:00:11'),
    username: 'dan',
    message: 'hej1',
  },
  {
    timestamp: new Date('2000-01-19T00:00:22'),
    username: 'dan',
    message: 'hej2',
  },
  {
    timestamp: new Date('2000-01-11T00:00:01'),
    username: 'dan',
    message: 'hej3',
  },
  {
    timestamp: new Date('2000-01-13T00:00:20'),
    username: 'dan',
    message: 'hej4',
  },
  {
    timestamp: new Date('2000-01-18T00:00:13'),
    username: 'dan',
    message: 'hej5',
  },
];

export default function Groupchat({navigation, route}) {
  console.log(JSON.stringify(navigation));
  console.log(JSON.stringify(route));
  const sortedChatMessages = chatMessages.sort((x, y) =>
    x.timestamp > y.timestamp ? 1 : -1,
  );
  const handleSend = () => {};
  const handleMediaUpload = () => {};
  return (
    <View style={styles.container}>
      <ScrollView style={styles.middle}>
        {sortedChatMessages.map(chatMessage => (
          <ChatMessageCard
            {...chatMessage}
            key={chatMessage.message + chatMessage.timestamp}
          />
        ))}
      </ScrollView>
      <View style={styles.send_message_container}>
        <TouchableOpacity
          style={styles.chatbox_media_button}
          onPress={handleMediaUpload}>
          <Text>P</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.chatbox_input_area}
          placeholder="Indtast besked..."
        />
        <TouchableOpacity
          style={styles.chatbox_send_button}
          onPress={handleSend}>
          <Text>S</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  top: {},
  middle: {
    flex: 1,
  },
  bottom: {},
  send_message_container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  chatbox_input_area: {
    flex: 5,
    borderWidth: 1,
  },
  chatbox_send_button: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 1,
    flex: 1,
  },
  chatbox_media_button: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 1,
    flex: 1,
  },
});
