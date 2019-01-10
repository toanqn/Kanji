import React, {Component} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet, StatusBar
} from 'react-native'
import {Header, Icon, Textarea} from "native-base";
import Metrics from "../Themes/Metrics";
import UUIDGenerator from 'react-native-uuid-generator';

import firebaseAPI from '../Services/FirebaseAPI';
import {NavigationActions} from "react-navigation";

export default class FeedbackScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    onSend = () => {
        UUIDGenerator.getRandomUUID((uuid) => {
            const database = firebaseAPI.database;
            database.ref('/feedback').push({
                uuid: uuid,
                value: this.state.input
            }, (error) => {
                if (error) {
                    alert(error)
                }
            }).then(() => {
                Alert.alert('Thành công', 'Cảm ơn đóng góp của bạn', [{
                    text: 'Ok',
                    onPress: () => {
                        const navigateAction = NavigationActions.navigate({
                            routeName: 'MainScreen'
                        });
                        this.props.navigation.dispatch(navigateAction);
                    }
                }])
            })
        });
    };



    render() {
        return (
            <View style={styles.container}>
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
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 30,
                            height: 30,
                            marginLeft: 5
                        }} onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name={'ios-menu'} style={{color: 'white'}}/>
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Let's write Kanji</Text>
                        <View style={{width: 30}}>

                        </View>
                    </View>
                </Header>

                <View style={styles.contentWrapper}>
                    <Textarea bordered={true}
                              value={this.state.input}
                              rowSpan={10} placeholder={'Nhập phản hồi...'} style={styles.input}
                              onChangeText={(value) => this.setState({input: value})}/>
                    <TouchableOpacity onPress={this.onSend}>
                        <Text style={styles.sendBtn}>Gửi</Text>
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
    contentWrapper: {
        flex: 1,
        padding: 10,
        marginTop: 10
    },
    sendBtn: {
        width: Metrics.screenWidth - 20,
        backgroundColor: '#376a3d',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        alignSelf: 'center',
        marginTop: 10,
        color: 'white'
    },
    input: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontSize: 13
    }
});
