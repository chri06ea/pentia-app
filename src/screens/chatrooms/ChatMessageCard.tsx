import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ChatMessageCard = ({
  username,
  message,
  timestamp,
}: {
  username: string;
  message: string;
  timestamp: Date;
}) => {
  const formatDate = (date: Date) => {
    return date.toLocaleString();
  };
  return (
    <View style={styles.container}>
      <View style={styles.portrait_contrainer}>
        <Text>Img</Text>
      </View>
      <View style={styles.message_container}>
        <Text style={styles.username}>{username}: </Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 3,
    margin: 2,
  },
  username: {
    fontWeight: '600',
  },
  message: {
    flex: 1,
  },
  notification: {},
  portrait_contrainer: {},
  message_container: {},
});
