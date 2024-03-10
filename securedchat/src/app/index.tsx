import * as React from 'react';
import { StyleSheet, Image, FlatList, Text, View } from 'react-native';

import ChatRoomItem from '@/src/components/ChatRoomItem';

import chatRoomsData from '../../assets/dummy-data/ChatRooms';

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];


export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
      data={chatRoomsData}
      renderItem={ ({ item }) => <ChatRoomItem chatRoom={item} />}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F4F5FF',
    flex: 1,
  },

});
