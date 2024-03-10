import React from "react";

import { StyleSheet, FlatList, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import Message from "@/src/components/Message";

import chatRoomData from '../../assets/dummy-data/Chats'
import MessageInput from "@/src/components/MessageInput";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    console.warn("Displaying chat room: ", route.params?.id)

    navigation.setOptions({title: 'Elon Musk'})

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
        backgroundColor: '#F4F5FF',
        flex: 1,
    }
});