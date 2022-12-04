import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export type Room = {
  name: string;
  description: string;
};

export default function useChatrooms() {
  const [items, setItems] = useState<Room[]>([]);
  useEffect(() => {
    const unsubcribe = firestore()
      .collection('rooms')
      .onSnapshot(
        querySnapshot => {
          const updatedRooms: Room[] = [];
          querySnapshot.forEach(querySnapshotData => {
            updatedRooms.push(querySnapshotData.data() as Room);
          });
          setItems(updatedRooms);
        },
        error => console.log(error),
      );
    return () => unsubcribe();
  }, []);
  return {
    rooms: items,
  };
}
