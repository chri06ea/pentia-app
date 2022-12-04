import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import useAuth from './useAuth';

export type Message = {
  poster: string;
  roomName: string;
  content: string;
  timestamp: Date;
};

// Handles chat (messaging, groups, )
export default function useGroupchat(roomName: string) {
  const {user} = useAuth();
  const [messages, setItems] = useState<Message[]>([]);
  useEffect(() => {
    const unsubcribe = firestore()
      .collection('messages')
      .where('roomName', '==', roomName)
      .onSnapshot(querySnapshot => {
        const updatedMessages: Message[] = [];
        querySnapshot.forEach(querySnapshotData => {
          const doc = querySnapshotData.data();
          const data: Message = {
            poster: doc.poster,
            roomName: doc.roomName,
            content: doc.content,
            timestamp: doc.timestamp.toDate() as Date,
          };
          updatedMessages.push(data);
        });

        const sortedMessages = updatedMessages.sort((x, y) => {
          return x.timestamp > y.timestamp ? 1 : -1;
        });
        setItems(sortedMessages);
      });
    return () => unsubcribe();
  }, [roomName]);
  return {
    messages,
    postMessage: (contents: string) => {
      const message: Message = {
        poster: user?.name ?? 'Anonymous',
        roomName: roomName,
        content: contents,
        timestamp: new Date(),
      };
      firestore().collection('messages').add(message);
    },
  };
}
