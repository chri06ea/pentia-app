import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ChatMessageCard} from './ChatMessageCard';

export default function Chatroom() {
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
  const sorted = chatMessages.sort((x, y) =>
    x.timestamp > y.timestamp ? 1 : -1,
  );
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        {sorted.map(chatMessage => (
          <ChatMessageCard
            {...chatMessage}
            key={chatMessage.message + chatMessage.timestamp}
          />
        ))}
      </View>

      <View style={styles.chatbox}>
        <TouchableOpacity>
          <Text>Media</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.chatbox_input_area}
          placeholder="Indtast besked..."
        />
        <TouchableOpacity style={styles.chatbox_send_button}>
          <Text>Send</Text>
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
  chatbox: {
    display: 'flex',
    flexDirection: 'row',
  },
  chatbox_input_area: {
    flex: 1,
    borderWidth: 1,
  },
  chatbox_send_button: {
    alignItems: 'center',
  },
  chatbox_media_button: {},
});
