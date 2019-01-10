import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity, StatusBar,
    StyleSheet,
    FlatList
} from 'react-native'
import Metrics from "../Themes/Metrics";
import {Header, Icon} from "native-base";
import Realm from "realm";

export default class FavouriteScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        };
    }

    componentDidMount() {
        const WordSchema = {
            name: 'Word',
            properties: {
                number: 'int',
                word: 'string',
                pronounciation: 'string'
            }
        };
        const HistorySchema = {
            name: 'History',
            properties: {
                number: 'int',
                word: 'string',
                noRight: {type: 'int', default: 0},
                noWrong: {type: 'int', default: 0}
            }
        };
        Realm.open({
            schema: [WordSchema, HistorySchema]
        }).then(realm => {
            this.realm = realm;
            console.log('realm', this.realm);
            let history = this.getHistory();
            this.setState({history: history});
        });
    };

    getHistory = () => {
        let history = this.realm.objects("History");
        console.log('history', history);
        let arr = history.map(item => {
            return {
                number: item.number,
                word: item.word,
                noRight: item.noRight,
                noWrong: item.noWrong
            }
        });
        console.log('arr', arr);
        return arr;
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
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, marginLeft: 5}} onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name={'ios-menu'} style={{color: 'white'}} />
                        </TouchableOpacity>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Let's write Kanji</Text>
                        <View style={{width: 30}}>

                        </View>
                    </View>
                </Header>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.item}>Character</Text>
                        <Text style={styles.noRight}>Right</Text>
                        <Text style={styles.noWrong}>Wrong</Text>
                    </View>
                    <View style={styles.break}/>
                    <FlatList
                    data={this.state.history}
                    renderItem={({item}) => 
                    <View>
                        <View style={styles.row}>
                        <Text style={styles.item}>{item.word}</Text>
                        <Text style={styles.noRight}>{item.noRight}</Text>
                        <Text style={styles.noWrong}>{item.noWrong}</Text>      
                        </View>
                        <View style={styles.break}/>
                    </View>
                    }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    row: {
      flexDirection: 'row',
      padding: 5,
      height: 60,
      backgroundColor: '#F6F6F6'
    },
    item: {
      padding: 10,
      fontSize: 18,
    },
    noRight: {
      position: 'absolute',
      right: 120,
      fontSize: 18,
      padding: 15,
      color: 'green',
    },
    noWrong: {
      position: 'absolute',
      right: 40,
      fontSize: 18,
      padding: 15,
      color: 'red',
    },
    break: {
        height: 1, backgroundColor: '#3B5998'
    }
});
