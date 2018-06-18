import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createMaterialTopTabNavigator } from 'react-navigation';

// // ** import of components **
// import {HomeScreen,SettingsScreen} from './components/TabSlider';
// import DatePicker from './components/DatePicker';
// import DateTimePickerTester from './playground/DateTimePicker';
// import ImagePicker from './playground/ImagePicker';
import ImageSlider from './components/ImageSlider';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
          {/* <DatePicker/> */}
          {/* <DateTimePickerTester/> */}
          {/* <ImagePicker/> */}
          <ImageSlider/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default createMaterialTopTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });