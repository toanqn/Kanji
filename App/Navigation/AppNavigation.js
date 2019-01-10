import {createStackNavigator, createDrawerNavigator} from 'react-navigation'
import MainScreen from "../Screens/MainScreen";
import SideMenu from "../Components/SideMenu";
import FavouriteScreen from "../Screens/FavouriteScreen";
import FeedbackScreen from "../Screens/FeedbackScreen";
import GuideScreen from "../Screens/GuideScreen";
import LaunchScreen from "../Screens/LaunchScreen";


const PrimaryNav = createDrawerNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: ({}) => ({
            header: null
        }),
    },
    FavouriteScreen: {
        screen: FavouriteScreen,
        navigationOptions: ({}) => ({
            header: null
        })
    },
    FeedbackScreen: {
        screen: FeedbackScreen,
        navigationOptions: ({}) => ({
            header: null
        })
    },
    GuideScreen: {
        screen: GuideScreen,
        navigationOptions: ({}) => ({
            header: null
        })
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 300,
    initialRouteName: 'MainScreen',
    navigationOptions: {
        header: null
    }
});

const PN = createStackNavigator({
    LaunchScreen: {
        screen: LaunchScreen,
        navigationOptions: ({}) => ({
            header: null
        })
    },
    MainNav: PrimaryNav
}, {
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        header: null
    }
});

export default PN;
