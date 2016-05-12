'use strict';
import React, {Component} from 'react';
import Text from './Text.jsx';

export default class Password extends Component {
    static propTypes = Text.propTypes;

    render() {
        var {secureTextEntry, ...props} = this.props;
        props.secureTextEntry = true;
        return <Text {...props}/>;
    }

}
