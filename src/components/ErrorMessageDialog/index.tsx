import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';

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
      <Text style={styles.title}>Fejl!</Text>
      {errors?.map(error => (
        <Text>{error}</Text>
      ))}
      <Text style={styles.message}></Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonClose]}
        onPress={() => setErrors(null)}>
        <Text style={styles.textStyle}>Luk</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({});
