'use strict';
import React, {Component, SwitchAndroid} from 'react-native';
import PropTypes from 'subschema/PropTypes';

export default class Checkbox extends Component {
    static propTypes = {
        onChange: PropTypes.valueEvent
    }

    changeValue() {
        var value = !this.state.value
        this.props.onChange(value ? true : false);
    }


    render() {
        return (
            <SwitchAndroid
                onValueChange={this.changeValue}
                value={this.props.value == null ? false : this.props.value}/>
        );
    }
}