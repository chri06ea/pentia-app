import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ChatMessageCard from './components/ChatMessageCard';
import useChat from '../../../../hooks/useChat';

export default function Groupchat() {
  const [inputBuffer, setInputBuffer] = useState('');
  const {messages, postMessage, postMedia} = useChat();
  const handleSend = () => {
    postMessage(inputBuffer);
    setInputBuffer('');
  };
  const handleMediaUpload = () => {
    postMedia('go');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.middle}>
        {messages.map(message => (
          <ChatMessageCard
            {...message}
            key={message.content + message.timestamp}
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
          placeholder="Skriv en besked..."
          value={inputBuffer}
          onChangeText={setInputBuffer}
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
