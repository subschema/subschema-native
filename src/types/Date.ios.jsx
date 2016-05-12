'use strict';

import React, {Component} from 'react';
import {DatePickerIOS} from 'react-native';
export default class DateInputType extends Component {
    render() {
        var date = this.props.value || new Date();
        return <DatePickerIOS
            date={date }
            mode="datetime"
            onDateChange={this.updateValue}
        />
    }

}
