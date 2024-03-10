import React from "react";

import { Text, StyleSheet, FlatList } from 'react-native';

import Message from "@/src/components/Message";
import { View } from "@/src/components/Themed";

import chatRoomData from '../../../assets/dummy-data/Chats'
import MessageInput from "@/src/components/MessageInput";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatRoomScreen() {
    return (
    <SafeAreaView style={styles.page}>
      <FlatList
      data={chatRoomData.messages}
      renderItem={({item}) => <Message message={item} />}
      inverted
      />
      <MessageInput />
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#F8F8F8',
        flex: 1,
    }
});