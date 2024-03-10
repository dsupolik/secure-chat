import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { FontAwesome5, Feather, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    
    const sendMessage = () => {
        console.warn("sending: ", message);
        setMessage('');
    }
    const onPlusClicked = () => {
        console.warn("On plus clicked")
    }
    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={24} color="green" style={styles.icon} />

        <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder='Type something...'
        />

        <Feather name="camera" size={24} color="green" style={styles.icon} />
        <FontAwesome name="microphone" size={24} color="green" style={styles.icon} />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 7,
    },
    buttonContainer: {
        width: 60,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'green',
        fontWeight: '500',
    },
});

export default MessageInput