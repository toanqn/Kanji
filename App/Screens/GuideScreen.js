import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text, StatusBar, TouchableOpacity
} from 'react-native'
import Metrics from "../Themes/Metrics";
import {Header, Icon} from "native-base";
import NavigationBar from "../Components/NavigationBar";
import Images from "../Themes/Images";


export default class GuideScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar navigation={this.props.navigation}/>
                <View style={{flex: 1, alignItems: 'center', backgroundColor: '#2c644e'}}>
                    <Image style={{
                        // width: '95%', height: '95%',
                        flex: 1,
                        resizeMode: 'contain',
                        margin: 5
                    }} source={Images.guide}/>

                    <TouchableOpacity style={styles.btnUnderstand} onPress={() => {
                        this.props.navigation.navigate('MainScreen')
                    }}>
                        <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>Đã hiểu</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnUnderstand: {
        backgroundColor: '#376a3d', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center'
    }
});
