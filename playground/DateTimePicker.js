import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker from './abc';

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          placeholder="placeholder"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          // iconSource={require('./google_calendar.png')}
          onDateChange={(date) => { this.setState({ date: date }); }}
        />
        <DatePicker
          style={{ width: 200 }}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => { this.setState({ time: time }); }}
        />
      </View>
    );
  }

}