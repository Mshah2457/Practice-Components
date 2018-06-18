import React from 'react';
import {
    StyleSheet, Text, Button,
    View, Platform, DatePickerIOS,
    DatePickerAndroid
}
    from 'react-native';

const isIOS = Platform.OS === 'ios';

class AndroidDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presetDate: new Date(),
            chosenDate: ''
        };
    }
    showPicker = async (stateKey, options) => {
        try {
            let newState = {};
            const { action, year, month, day } = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                // <<<< Newly selected date >>>>
                let date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState({
                presetDate: newState,
                chosenDate: newState[stateKey + 'Text']
            }, () => { console.log(this.state.chosenDate) });
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}':`, message);
        }
    };
    render() {
        return (
            <View>
                <Button title="Date" onPress={this.showPicker}>Date selector</Button>
                <Text> {this.state.chosenDate}</Text>
            </View>
        )
    }
}

class IosDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { presetDate: new Date() };
    }
    setDate = (newDate) => {
        this.setState({ presetDate: newDate }, () => { alert(this.state.presetDate.toLocaleDateString()) })
    }
    render() {
        return (
            <View>
                <DatePickerIOS
                    date={this.state.presetDate}
                    onDateChange={this.setDate}
                />
                <Text> {this.state.presetDate.toLocaleDateString()}</Text>
            </View>
        )
    }
}

export default class DatePicker extends React.Component {
    render() {
        return (
            <View>
                {isIOS ? <IosDate /> : <AndroidDate />}
            </View>
        );
    }
}
