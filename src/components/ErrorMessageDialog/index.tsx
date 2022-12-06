import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ErrorMessageDialog({
  errors,
  setErrors,
}: {
  errors: string[] | null;
  setErrors: React.Dispatch<React.SetStateAction<string[] | null>>;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={errors != null}
      onRequestClose={() => {
        setErrors(null);
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Fejl!</Text>
        <View style={styles.message}>
          {errors?.map(error => (
            <Text key={error}>{error}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setErrors(null)}>
          <Text style={styles.button_text}>Luk</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    borderWidth: 1,
    textAlign: 'center',
  },

  title: {
    flex: 1,
    padding: 10,
    fontWeight: '800',
  },
  message: {
    flex: 1,
  },
  button: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    borderColor: 'gray',
  },
  button_text: {
    textAlign: 'center',
    color: 'black',
  },
});
