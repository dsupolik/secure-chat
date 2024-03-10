import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, Image, useWindowDimensions, View } from 'react-native';

import { useColorScheme } from '@/src/components/useColorScheme';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>

        <Stack.Screen name="index" options={{ header: HomeHeader }} />
        <Stack.Screen name="ChatRoom" options={{ header: ChatRoomHeader, headerBackTitleVisible: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      backgroundColor: '#F4F5FF',
      width,
      paddingHorizontal: 10,
      paddingBottom: 25,
      paddingTop: 60,
      alignItems: 'center',
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style={{ width: 30, height: 30, borderRadius: 30, marginLeft: 10}}
      />
      <Text style={{flex: 1, marginLeft: 20, fontWeight: 'bold', fontSize: 24}}>Chats</Text>
      <Feather name="camera" size={24} color="black" style={{ marginHorizontal: 10}} />
      <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10}} />
    </View>
  )
};

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();
  console.log(props);

  return (
    <View style={{ 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      backgroundColor: '#F4F5FF',
      width,
      paddingHorizontal: 10,
      paddingBottom: 25,
      paddingTop: 65,
      alignItems: 'center',
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
        style={{ width: 30, height: 30, borderRadius: 30, marginLeft: 10}}
      />
      <Text style={{flex: 1, marginLeft: 10, fontWeight: 'bold'}}>{props.children}sadasd</Text>
      <Feather name="video" size={24} color="black" style={{ marginHorizontal: 10}} />
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" style={{ marginHorizontal: 10}} />
    </View>
  )
}