import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function ChatMessageCard({
  poster,
  content,
  timestamp,
}: {
  poster: string;
  content: string;
  timestamp: Date;
}) {
  const formatTimestamp = (date: Date) => {
    // Translate a date to a string.
    // Depending on current time the result might be: "12:00", "Yesterday", "Thursday", "Last month", "Last year"
    // !TODO
    return new Date(date).toLocaleString();
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('./../../../../assets/avatar_placeholder.jpg')}
      />
      <View style={styles.message_container}>
        <Text style={styles.username}>{poster}</Text>
        <Text style={styles.message}>{content}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 1,
  },
  message: {},
  avatar: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    flex: 1,
    borderRadius: 10,
    margin: 2,
  },
  timestamp: {
    right: 0,
    bottom: 0,
    textAlign: 'right',
    fontSize: 11,
  },
});
