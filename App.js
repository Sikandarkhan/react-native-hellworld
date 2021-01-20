// import React, {Component} from 'react';  
import React, { useEffect, useState } from "react";

import {Platform, StyleSheet, Text, View} from 'react-native';  
import { AppState } from 'react-native'


  
type Props = {};  

const App = (props) => {
  
  // const [appState, setAppState] = useState(AppState.currentState);
const [appState, setAppState] = useState(AppState.currentState);
const handleAppStateChange = (state: any) => {
  setAppState(state);
}
useEffect(() => {
  AppState.addEventListener('change', handleAppStateChange);
  return (() => {
    AppState.removeEventListener('change', handleAppStateChange);
  })
}, []);
useEffect(() => {
  console.log(appState);
});

return (  
        <View>  
          <Text >W3Adda</Text>  
          <Text >Hello World</Text>  
        </View>  
      ); 
}


export default App;


// export default class App extends Component<Props> {  
//   render() {  
//     return (  
//       <View>  
//         <Text style={styles.welcome}>W3Adda</Text>  
//         <Text style={styles.welcome}>Hello World</Text>  
//       </View>  
//     );  
//   }  
// }  
// const styles = StyleSheet.create({  
//   welcome: {  
//     fontSize: 20,  
//     textAlign: 'center',  
//     margin: 10,  
//   }  
// });