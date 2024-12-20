import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {

  // const handlePress = () => {
  //   console.log("The text has been clicked") 
  // }

  // const handleImagePress = () => {
  //   console.log("The image has been pressed")
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={handlePress}>Pankaj here starting android development and he want to become a good full stack developer with both web and android</Text>
      <TouchableHighlight onPress={handleImagePress}>
        <Image 
        blurRadius={4}
        source={{
          width : 200,
          height : 300,
          uri : 'https://picsum.photos/200/300'
        }}/>
      </TouchableHighlight> */}

      <Button title="Click me" color="red" 
        // onPress={() => Alert.alert("My alert", 
        //                            "This is a custom alert", 
        //                             [
        //                               {text : "Yes", onPress : () => {console.log("Yes clicked")} },
        //                               {text : 'No', onPress : ()=> {console.log("No pressed")} }
        //                             ])}    

        onPress = {
          () => Alert.prompt("Question", "Enter your name" ,text => console.log(text))
        }

      ></Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
});
