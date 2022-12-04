import {useCollection} from './useCollection';

export type Room = {
  name: string;
  description: string;
};

export type Message = {
  poster: string;
  roomName: string;
  content: string;
  timestamp: Date;
};

// Handles chat (messaging, groups, )
export default function useChat(roomName: string | null = null) {
  const rooms = useCollection<Room>('rooms');
  const messages = useCollection<Message>(
    'messages',
    message => message.roomName === roomName,
  );
  console.log('roomName', roomName);
  console.log('rooms', rooms);
  return {
    rooms: rooms.items,
    messages: messages.items,
    postMessage: (contents: string) => {
      console.log(contents);
    },
    postMedia: (contents: string) => {
      console.log(contents);
    },
  };
}
