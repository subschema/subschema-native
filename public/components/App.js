/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React, {Component, PropTypes} from 'react'
import {Form} from 'subschema';
import loader from '../../src/index.ios';
import schema from '../schema.json';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App = ({
    instructions,
}) => <Form schema={schema} loader={loader}/>

App.propTypes = {
    instructions: PropTypes.string,
};

App.defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App
