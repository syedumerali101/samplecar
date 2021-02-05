import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Video from 'react-native-video'
import Cleaning from './assets/videos/Cleaning.mp4'

export default class WorkVIdeo extends Component {
    render() {
        return (
            <View style={{flex:1}}>
             <Video source = {Cleaning}
               ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.backgroundVideo}
              repeat
              resizeMode = "cover" />

              <View style={{padding: 10}}>
                  <TouchableOpacity style={{opacity: 0.60, backgroundColor: 'grey', padding: 10, height: 80, width: 110, justifyContent: 'center', alignItems: 'center'}}>
                      <Image source = {require('./assets/images/Logo.png')}/>
                      
                          <Text style={{color: 'white', fontWeight: 'bold'}}>
                              HOW TO USE
                          </Text>
                      
                  </TouchableOpacity>

              <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical:380}}>
               <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                   CHOOSE YOUR MODE
                   </Text>
                   </View>
              <View style={{position: 'absolute', paddingTop: 500, paddingLeft: 10}}>
               <TouchableOpacity style={{height: 80, width: 150, backgroundColor: '#5d5dff', justifyContent: 'center', alignItems: 'center', opacity: 0.70}}
            //    onPress={this.alert}>
                  onPress = {() => this.props.navigation.navigate("Autoservices")}>
                   <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                       Automatic
                   </Text>
                   <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                       Mode
                   </Text>
               </TouchableOpacity>
               </View>
              </View>

            <View style={{position: 'absolute', paddingTop: 500, alignSelf : 'flex-end', paddingRight: 10}}>
               
               
            <TouchableOpacity style ={{height: 80, width: 150, backgroundColor: '#5d5dff', justifyContent: 'center', alignItems: 'center',borderwidth: 1, opacity: 0.70}} 
               onPress={() => this.props.navigation.navigate("ManualServices")}>
                   <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>
                       Manual
                   </Text>
                   <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>
                       Mode
                   </Text>
               </TouchableOpacity>
           </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });
