import React, { Component } from 'react';
import { Text, View,Image, TouchableOpacity} from 'react-native';


export default class ButtonWork extends React.Component{
    state = {
        on : false,
        open : false,
        yes: false

    }
    
    
    ButtonWork () {

        
        return (
            
            
            <TouchableOpacity onPress ={ this.props.onPress}>
                {
                    this.props.value === !true ? <Image style={{height: 30, width: 30}} source={require('./assets/images/lock.png')}/> : <Image style={{height: 30, width: 30}} source={require('./assets/images/unlock1.png')}/>
                }
            
            </TouchableOpacity>

        
        )
 
    }
    

    render(){
        //console.log("testing1" , this.props.value);
        // console.log("testing", this.props.onPress);
        return(
            <View>
            {
                this.ButtonWork()
            }
            </View>

        )
    }
}