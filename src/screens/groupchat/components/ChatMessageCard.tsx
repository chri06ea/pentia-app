import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import useResource from '../../../hooks/useResource';

const ImageResource = ({resourceName}: {resourceName: string}) => {
  const {url} = useResource(resourceName);
  if (!url) {
    return <></>;
  }
  return <Image style={styles.img} source={{uri: url}} />;
};

const DefaultAvatar = () => {
  return (
    <Image
      style={styles.avatar}
      source={require('./../../../../assets/avatar_placeholder.jpg')}
    />
  );
};

const Avatar = ({resourceName}: {resourceName: string}) => {
  return <ImageResource resourceName={resourceName} />;
};

export default function ChatMessageCard({
  poster,
  content,
  timestamp,
  avatarUri,
  mediaUri,
}: {
  poster: string;
  content: string;
  timestamp: Date;
  avatarUri?: string;
  mediaUri?: string;
}) {
  const formatTimestamp = (date: Date) => {
    // Translate a date to a string.
    // Depending on current time the result might be: "12:00", "Yesterday", "Thursday", "Last month", "Last year"
    // !TODO
    return new Date(date).toLocaleString();
  };
  return (
    <View style={styles.container}>
      {avatarUri ? <Avatar resourceName={avatarUri} /> : <DefaultAvatar />}
      <View style={styles.message_container}>
        <Text style={styles.username}>{poster}</Text>
        {mediaUri ? (
          <View style={styles.media}>
            <ImageResource resourceName={mediaUri} />
          </View>
        ) : (
          <></>
        )}
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    flex: 1,
    aspectRatio: 1,
  },
  content: {},
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 3,
    margin: 2,
  },
  username: {
    fontWeight: '600',
  },
  message_container: {
    flex: 10,
    backgroundColor: 'rgba(1,1,1,0.1)',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  avatar: {
    width: 30,
    height: 30,
  },

  timestamp: {
    right: 0,
    bottom: 0,
    textAlign: 'right',
    fontSize: 11,
  },
});
