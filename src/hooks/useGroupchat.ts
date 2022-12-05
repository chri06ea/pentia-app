import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import useAuth from './useAuth';

export type Message = {
  poster: string;
  roomName: string;
  content: string;
  timestamp: Date;
  mediaUri?: string;
};

// Handles chatting within a specific room
export default function useGroupchat(roomName: string) {
  const {user} = useAuth();
  const [messages, setItems] = useState<Message[]>([]);
  // URI of media to be sent along the next message
  const [selectedMediaUri, setSelectedMediaUri] = useState<
    string | undefined
  >();
  /**
   *Upload image to firebase storage and return its serverside path
   */
  const uploadImage = (uri: string) => {
    return new Promise<string>((resolve, reject) => {
      const path = `${user?.name ?? '?'}_${Date.now().toLocaleString()}`;
      const ref = storage().ref(path);
      const task = ref.putFile(uri);
      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      task
        .then(() => {
          // Success
          resolve(path);
        })
        .catch(err => reject(err));
      return path;
    });
  };
  useEffect(() => {
    // Message state listener
    const unsubcribe = firestore()
      .collection('messages')
      .where('roomName', '==', roomName)
      .onSnapshot(querySnapshot => {
        // Read updated messages
        const updatedMessages: Message[] = [];
        querySnapshot.forEach(async querySnapshotData => {
          const doc = querySnapshotData.data();
          const data: Message = {
            poster: doc.poster,
            roomName: doc.roomName,
            content: doc.content,
            timestamp: doc.timestamp.toDate() as Date,
            mediaUri: doc.mediaUri,
          };
          updatedMessages.push(data);
        });
        // Sort oldest -> newest
        const sortedMessages = updatedMessages.sort((x, y) =>
          x.timestamp > y.timestamp ? 1 : -1,
        );
        setItems(sortedMessages);
      });
    return () => unsubcribe();
  }, [roomName]);
  return {
    messages,
    selectedMediaUri,
    /**
     * Post a message to chat.
     * @param contents
     */
    postMessage: async (contents: string) => {
      const message: Message = {
        poster: user?.name ?? 'Anonymous',
        roomName: roomName,
        content: contents,
        timestamp: new Date(),
      };
      if (selectedMediaUri) {
        // If media selected upload and get a download link.
        message.mediaUri = await uploadImage(selectedMediaUri);
        setSelectedMediaUri(undefined);
      }
      console.log(message);
      firestore().collection('messages').add(message);
    },
    uploadCameraImage: () => {
      launchCamera({
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      }).then(res => {
        setSelectedMediaUri(res.assets?.[0]?.uri);
      });
    },
    uploadGalleryImage: () => {
      launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      }).then(res => {
        setSelectedMediaUri(res.assets?.[0]?.uri);
      });
    },
  };
}
