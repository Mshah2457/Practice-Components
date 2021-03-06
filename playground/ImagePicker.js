import Expo from 'expo';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    CameraRoll,
} from 'react-native';

export default class ImagePicker extends React.Component {
    state = {
        imgUri: null,
        topText: '',
        bottomText: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Image Picker
        </Text>

                <Image ref={(ref) => this.imageView = ref}
                    style={{ width: 300, height: 300, backgroundColor: '#dddddd' }}
                    source={{ uri: this.state.imgUri }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onChoosePic}>
                        <Text style={styles.buttonText}>Choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onTakePic}>
                        <Text style={styles.buttonText}>Take</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>

                </View>
                <Text>{this.state.imageUri}</Text>
                <Image source={{ uri: this.state.imgUri }}
                    style={{ width: 300, height: 300 }}

                />
            </View>
        );
    }


    // When "Choose" is pressed, we show the user's image library
    // so they may show a photo from disk inside the image view.
    _onChoosePic = async () => {
        const {
            cancelled,
            uri,
        } = await Expo.ImagePicker.launchImageLibraryAsync();
        if (!cancelled) {
            this.setState({ imageUri: uri }, () => { console.log(this.state.imageUri) });
            // this logs correctly
            // TODO: why isn't this showing up inside the Image on screen?
        }
    }

    // When "Take" is pressed, we show the user's camera so they
    // can take a photo to show inside the image view on screen.
    _onTakePic = async () => {
        const {
            cancelled,
            uri,
        } = await Expo.ImagePicker.launchCameraAsync({});
        if (!cancelled) {
            this.setState({ imgUri: uri });
        }
    }

    // When "Save" is pressed, we snapshot whatever is shown inside 
    // of "this.imageView" and save it to the device's camera roll.
    _onSave = async () => {
        const uri = await Expo.takeSnapshotAsync(this.imageView, {});
        await CameraRoll.saveToCameraRoll(uri);
        // TODO: show confirmation that it was saved (flash the word saved across bottom of screen?)
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        margin: 20,
    },
    buttonText: {
        fontSize: 21,
    },
    button: {
        padding: 13,
        margin: 15,
        backgroundColor: '#dddddd',
    },
    container: {
        marginTop: Expo.Constants.statusBarHeight + 40,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
});
