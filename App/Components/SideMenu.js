import React, {Component} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import {NavigationActions} from 'react-navigation'

import {Icon} from 'native-base'
import MaterialSwitch from '../Components/Switch'
import Preferences from "../Services/Preferences";


export default class SideMenu extends Component {

    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer()
    };

    autoRecognize = (autoRecognize) => {
        AsyncStorage.setItem("auto_recognize", autoRecognize);
        Preferences.autoRecognize = autoRecognize;
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
                <View style={{height: 150, justifyContent: 'center', backgroundColor: '#2c644e', marginBottom: 10}}>
                    <View style={{marginLeft: 50}}>
                        <Text style={{fontSize: 40, color: 'white'}}>Kanji</Text>
                        <Text style={{color: 'white'}}>Let's write!</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 20,
                        alignItems: 'center'
                    }} onPress={() => this.navigateToScreen('MainScreen')}>
                        <Icon name={'edit-3'} type={'Feather'} style={{fontSize: 16, marginRight: 10}}/>
                        <Text style={{fontSize: 16, marginLeft: 20, fontWeight: '500'}}>Tập viết</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 20,
                        alignItems: 'center'
                    }} onPress={() => this.navigateToScreen('FavouriteScreen')}>
                        <Icon name={'pocket'} type={'Feather'} style={{fontSize: 16, marginRight: 10}}/>
                        <Text style={{fontSize: 16, marginLeft: 20, fontWeight: '500'}}>Đã lưu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 20,
                        alignItems: 'center'
                    }} onPress={() => this.navigateToScreen('FeedbackScreen')}>
                        <Icon name={'send'} type={'Feather'} style={{fontSize: 16, marginRight: 10}}/>
                        <Text style={{fontSize: 16, marginLeft: 20, fontWeight: '500'}}>Phản hồi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 20,
                        alignItems: 'center'
                    }} onPress={() => this.navigateToScreen('GuideScreen')}>
                        <Icon name={'help-circle'} type={'Feather'} style={{fontSize: 16, marginRight: 10}}/>
                        <Text style={{fontSize: 16, marginLeft: 20, fontWeight: '500'}}>Hướng dẫn</Text>
                    </TouchableOpacity>

                    {/* <View style={{
                        flexDirection: 'row',
                        paddingTop: 15,
                        paddingBottom: 15,
                        paddingLeft: 20,
                        paddingRight: 5,
                        alignItems: 'center'
                    }}>
                        <Icon name={'settings'} type={'Feather'} style={{fontSize: 16, marginRight: 10}}/>
                        <Text style={{fontSize: 16, marginLeft: 20, fontWeight: '500', flex: 1}}>Tự động nhận
                            diện</Text>
                        <MaterialSwitch
                            onActivate={() => this.autoRecognize('1')}
                            onDeactivate={() => this.autoRecognize('0')}
                            active={Preferences.autoRecognize}
                            switchWidth={30} switchHeight={10} buttonRadius={10} activeButtonColor='#2c644e'/>
                    </View> */}
                </View>
                <Text style={{margin: 10}}>Version 1.0.0</Text>
            </View>
        );
    }
}
