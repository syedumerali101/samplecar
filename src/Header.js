import React, { Component } from 'react';
import { Text, View,Image, TouchableOpacity} from 'react-native';

export default class Header extends React.Component{
    
    header () {

        const {label} = this.props; 
        return (
         <View style={{marginTop: 20}}>
         <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 15}}>
            {
                label
            }
         </Text>
     </View>
        )
 
    }
    render(){
        return(
            <View>
                {
                    this.header()

                }
                

            </View>

        )
    }
}