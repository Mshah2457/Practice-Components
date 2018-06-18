////////////////TabNAvigator///////////////////////////

// import React from 'react';

// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View } from 'react-native';
// // import { createMaterialTopTabNavigator } from 'react-navigation';
// import Map from './components/Map';

// //import of components
// // import {HomeScreen,SettingsScreen} from './components/TabSlider';


//
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// // export default createMaterialTopTabNavigator({
// //   Home: HomeScreen,
// //   Settings: SettingsScreen,
// // });




////////////////////////////////////MApView////////////////////////////////
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});





////////////////////////////////////ImagePicker//////////////////////////////////////////
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   PixelRatio,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {

//   state = {
//     avatarSource: null,
//     videoSource: null
//   };

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true
//       }
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       }
//       else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       }
//       else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       }
//       else {
//         let source = { uri: response.uri };

//         // You can also display the image using data:
//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({
//           avatarSource: source
//         });
//       }
//     });
//   }

//   selectVideoTapped() {
//     const options = {
//       title: 'Video Picker',
//       takePhotoButtonTitle: 'Take Video...',
//       mediaType: 'video',
//       videoQuality: 'medium'
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled video picker');
//       }
//       else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       }
//       else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       }
//       else {
//         this.setState({
//           videoSource: response.uri
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
//           { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
//             <Image style={styles.avatar} source={this.state.avatarSource} />
//           }
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
//           <View style={[styles.avatar, styles.avatarContainer]}>
//             <Text>Select a Video</Text>
//           </View>
//         </TouchableOpacity>

//         { this.state.videoSource &&
//           <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
//         }
//       </View>
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   avatar: {
//     borderRadius: 75,
//     width: 150,
//     height: 150
//   }
// });


// import React from 'react-native'
// import t from 'tcomb-form-native'
// import ImageFactory from 'react-native-image-picker-form'
 
// const Form = t.form.Form
// const DocumentFormStruct = t.struct({
//   image: t.String
// })
 
// type Props = {}
// type State = {
//   value: Object,
//   options: Object
// }
 
// class App extends React.Component<Props, State> {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: {},
//       options: {
//         fields: {
//           image: {
//             config: {
//               title: 'Select image',
//               options: ['Open camera', 'Select from gallery', 'Cancel'],
//               // Used on Android to style BottomSheet
//               style: {
//                 titleFontFamily: 'Times New Roman'
//               }
//             },
//             error: 'No image provided',
//             factory: ImageFactory
//           }
//         }
//       }
//     }
//   }
 
//   render() {
//     return (
//       <Form
//         ref={(ref: any) => {
//           this.form = ref
//         }}
//         type={DocumentFormStruct}
//         value={this.state.value}
//         options={this.state.options}
//       />
//     )
//   }
// }