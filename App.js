import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, ScrollView, Image, Dimensions} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from './src/HomeScreen';
import DashboardScreen from './src/DashboardScreen';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import WelcomeScreen from './src/WelcomeScreen';
import Work from './src/Work';
import ManualServices from './src/ManualServices';
import Autoservices from './src/Autoservices';
import NetInfo from "@react-native-community/netinfo";


const {width} = Dimensions.get('window');
export default class App extends React.Component{

    render(){
        return(
            <AppContainer/>

        );
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height: 600, backgroundColor: '#5d5dff', borderTopRightRadius: 300, borderBottomRightRadius: 300, paddingTop: 50}}>
            <View style={{paddingLeft: 15}}>
            <Image style={{height: 60, width: 60, borderRadius: 60}} source={require('./src/assets/images/profile.jpg')}/>
            </View>

            <View style={{paddingTop: 5, paddingLeft: 15}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Andrew Crammer</Text>
                <Text style={{color: 'lightgray', fontSize: 16}}>Karachi, Pakistan</Text>
            </View>
            
            <View style={{paddingTop: 50}}>
            <ScrollView>
            <DrawerItems {...props}/>
            </ScrollView>
            </View>
            
        </View>
        {/* <ScrollView>
            <DrawerItems {...props}/>
            
        </ScrollView> */}

    </SafeAreaView>
)

const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
WelcomeScreen : WelcomeScreen,
Home : HomeScreen,
ManualServices: ManualServices,
Autoservices: Autoservices,
Work: Work
}, {
    contentComponent : CustomDrawerComponent,
    drawerWidth: width - 60,
    drawerBackgroundColor: "transparent ",
    contentOptions : {
        activeTintColor : 'lightgray',
        inactiveTintColor : 'white'
    }
}
// {initialRouteName: "Welcome"}

);

      


const AppStackNavigaor = createStackNavigator({
    Home: HomeScreen
},
//{initialRouteName : "DashboardScreen"},

{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#C0C0C0'
        }
    }
});


const AppContainer = createAppContainer(MyDrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    }
})


