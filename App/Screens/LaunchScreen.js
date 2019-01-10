import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import Preferences from "../Services/Preferences";

export default class LaunchScreen extends Component{

    componentDidMount() {
        AsyncStorage.getItem("auto_recognize", (err, autoRecognize) => {
            console.log('auto', autoRecognize);
            Preferences.autoRecognize = autoRecognize === '1';
            this.navigate()
        })
    }

    navigate = () => {
        this.props.navigation.navigate('MainNav')
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4baf58'
    }
});
