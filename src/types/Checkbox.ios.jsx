'use strict';

import React, {Component} from 'react';
import {SwitchIOS} from 'react-native';
import {PropTypes} from 'subschema';

export default class Checkbox extends Component {
    static propTypes = {
        onChange: PropTypes.valueEvent
    };

    changeValue = (e)=> {
        var value = !this.props.value
        this.props.onChange(value ? true : false);
    };

    render() {
        const {value} = this.props;
        return (
            <SwitchIOS
                onValueChange={this.changeValue}
                value={!!value}/>
        );
    }
}