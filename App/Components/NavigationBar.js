import React, {Component} from 'react'
import {StatusBar, Text, TouchableOpacity, View} from "react-native";
import Metrics from "../Themes/Metrics";
import {Header, Icon} from "native-base";

import PropTypes from 'prop-types'

export default class NavigationBar extends Component{
    render() {
        return (
            <Header style={{backgroundColor: '#376a3d'}}>
                <StatusBar barStyle={'light-content'}/>
                <View style={{
                    height: 40,
                    backgroundColor: '#376a3d',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: Metrics.screenWidth,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, marginLeft: 5}} onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name={'ios-menu'} style={{color: 'white'}} />
                    </TouchableOpacity>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Let's write Kanji</Text>
                    <View style={{width: 30}}>

                    </View>
                </View>
            </Header>
        );
    }
}

NavigationBar.propTypes = {
    navigation: PropTypes.object
};
