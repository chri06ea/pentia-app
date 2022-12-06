import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ChatroomCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
      <Text style={styles.chevron}>{'>'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  image_container: {
    borderWidth: 1,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 3,
  },
  text_container: {
    padding: 1,
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
  },
  chevron: {
    fontWeight: '400',
    fontSize: 32,
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
  },
});
