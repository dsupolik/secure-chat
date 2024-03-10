import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const green = 'green';
const white = 'white';

const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id == myID;

  return (
    <View style={[
        styles.container, isMe ? styles.rightContainer : styles.leftContainer]}
        >
      <Text style={{ color: isMe ? 'white' : 'black' }}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 7,
        maxWidth: '75%',
    },
    leftContainer: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: '#6f83d7',
        marginLeft: 'auto',
        marginRight: 10,
    },
});

export default Message;