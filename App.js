/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import HelloWorldApp from "./HelloWorldApp";
import Greeting from "./Greeting";
import Bananas from "./Bananas";
import BlinkApp from "./Blink";
import LotsOfStyles from "./LotsOfStyles";
import PizzaTranslator from "./PizzaTranslator";
import ButtonBasics from "./ButtonBasics";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for d ev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native Dev!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Bananas/>
                    <HelloWorldApp/>
                    <Greeting name={'Salibonani'}/>
                    <BlinkApp/>
                    <LotsOfStyles/>
                    <PizzaTranslator/>
                    <ButtonBasics/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 25,
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
