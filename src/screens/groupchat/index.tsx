import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useGroupchat from '../../hooks/useGroupchat';
import ChatMessageCard from './components/ChatMessageCard';

export type RootParamList = {
  Groupchat: {
    roomName: string;
  };
};

export default function Groupchat() {
  const route = useRoute<RouteProp<RootParamList, 'Groupchat'>>();
  const [inputBuffer, setInputBuffer] = useState('');
  const {messages, postMessage, uploadCameraImage, uploadGalleryImage} =
    useGroupchat(route.params.roomName);
  const handleSend = () => {
    if (inputBuffer.length > 0) {
      postMessage(inputBuffer);
    }
    setInputBuffer('');
  };
  const handleMediaUpload = () => uploadGalleryImage();
  const handleCameraUpload = () => uploadCameraImage();
  const scrollView = useRef<ScrollView | null>(null);
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        style={styles.middle}
        onContentSizeChange={() => {
          // Scroll to the bottom whenever a message is added
          scrollView.current?.scrollToEnd();
        }}>
        {messages.map((message, i) => (
          <ChatMessageCard {...message} key={i} />
        ))}
      </ScrollView>
      <View style={styles.send_message_container}>
        <TouchableOpacity
          style={styles.chatbox_media_button}
          onPress={handleMediaUpload}>
          <Text>P</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chatbox_media_button}
          onPress={handleCameraUpload}>
          <Text>C</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.chatbox_input_area}
          placeholder="Skriv en besked..."
          value={inputBuffer}
          onChangeText={setInputBuffer}
          onFocus={() => {
            // Scroll to the bottom whenever the keyboard pops up
            scrollView.current?.scrollToEnd();
          }}
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
    justifyContent: 'flex-end',

    flex: 1,
  },
  top: {},
  middle: {
    flex: 1,
    flexGrow: 1,
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
