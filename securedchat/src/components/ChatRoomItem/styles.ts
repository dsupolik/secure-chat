import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 15,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 30,
      marginRight: 15,
    },
    badgeContainer: {
      backgroundColor: 'red',
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 45,
      top: 10,
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
    },
    rightContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontWeight: '500',
      fontSize: 18,
      marginBottom: 3,
    },
    text: {
      color: 'grey',
    },
  });
  
  export default styles;