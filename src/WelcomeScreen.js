import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground} from 'react-native';

export default class WelcomeScreen extends React.Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate("Home")
        }, 5000);
    }
    render(){
        return(
            
            <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{height: 80, width: 80}} source = {require('./assets/images/Logo1.png')}/>
                <View style={{paddingTop: 5, justifyContent: 'center', alignItmes:'center'}}> 
                </View>
                
            </View>
        )
    }
}