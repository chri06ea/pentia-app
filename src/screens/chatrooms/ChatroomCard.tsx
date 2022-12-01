import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ChatroomCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <View style={styles.container}>
    <View style={styles.image_container} />
    <View style={styles.text_container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{description}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  image_container: {
    borderWidth: 1,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 3,
  },
  text_container: {
    padding: 1,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
  },
});
