import React from 'react';
import {Modal, Pressable, StyleSheet, Text} from 'react-native';

export default function ErrorMessageDialog({
  errors,
  setErrors,
}: {
  errors: string;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={errors != null}
      onRequestClose={() => {
        setErrors(null);
      }}>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setErrors(null)}>
        <Text style={styles.textStyle}>Hide Mssodal</Text>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({});
