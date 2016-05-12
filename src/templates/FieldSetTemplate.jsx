"use strict";

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FieldSetTemplate from 'subschema/templates/FieldSetTemplate';

const {propTypes, defaultProps} = FieldSetTemplate;

export default class FieldSetTemplateNative extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;

    render() {
        const {legend, content, legendClass, children, buttons, className, ...rest} =  {...this.props.field, ...this.props};
        return (<View>
            {legend ? <Text>{legend}</Text> : null}
            {children}
            {buttons}
        </View> );
    }
}