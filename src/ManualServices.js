import React, { Component } from 'react';
import { Text, View,TouchableOpacity, Image} from 'react-native';
import ButtonWork from './ButtonWork';
import instance from './Baseurl';
import Axios from 'axios';




export default class ManualServices extends React.Component{
    state = {
        on : false,
        open : false,
        yes: false
    }

    componentWillUpdate(nextProps, nextState){
        const {on, open, yes} = this.state;
        console.log('Mop is here', on);
        console.log('next state', nextState.on);
        if(this.state.on !== nextState.on){
        if(on){
            this.mopOff();
        } else if(!on){
            this.mopOn();
        }
    }

    if(this.state.open !== nextState.open){
        if(open){
            this.brushOff();
        } else if(!open){
            this.brushOn();
        }
    }

    if(this.state.yes !== nextState.yes){
        if(yes){
            this.vaccumOff();
        } else if(!yes){
            this.vaccumOn();
        }
    }

    }


  
    brushOn(){
        console.log("Brush is on");
    instance
    .get('?Brush=1',  {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            sccode: '601'
        }
    }
    ).then((response) => {
        this.setState({
            Campuses: response,
        }); { console.log("Data: ", this.state.Campuses); }
    }).catch((error) => {
        console.log("Error ", error);
    }) 
   }

   brushOff(){
    console.log("Brush is off")
instance
.get('?Brush=0', {
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        sccode: '601'
    }
}
).then((response) => {
    this.setState({
        Campuses: response,
    }); { console.log("Data: ", this.state.Campuses); }
}).catch((error) => {
    console.log("Error ", error);
}) 
}


   
   mopOn(){
        console.log("Mop is on");
    instance
    .get('?Mop=1', {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            sccode: '601'
        }
    }
    ).then((response) => {
        console.log('checking1')
        this.setState({
            Campuses: response,
        }); { console.log("Data: ", this.state.Campuses); }
    }).catch((error) => {
        console.log("Error ", error);
    }) 
   }

   mopOff(){
    console.log("Mop is off");
instance
.get('?Mop=0', {
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        sccode: '601'
    }
}
).then((response) => {
    this.setState({
        Campuses: response,
    }); { console.log("Data: ", this.state.Campuses); }
}).catch((error) => {
    console.log("Error ", error);
}) 
}


   vaccumOn(){
    console.log("Vacuum is on");
    instance
    .get('?Vacuum=1', {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            sccode: '601'
        }
    }
    ).then((response) => {
        this.setState({
            Campuses: response,
        }); { console.log("Data: ", this.state.Campuses); }
    }).catch((error) => {
        console.log("Error ", error);
    }) 
   }

   vaccumOff(){
    console.log("Vacuum is off");
instance
.get('?Vacuum=0', {
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        sccode: '601'
    }
}
).then((response) => {
    this.setState({
        Campuses: response,
    }); { console.log("Data: ", this.state.Campuses); }
}).catch((error) => {
    console.log("Error ", error);
}) 
}



    status = () => {
        this.setState({
            on : !this.state.on
        })
      
    }

    status1 = () => {
        this.setState({
            open : !this.state.open
        })
    }

    status2 = () => {
        this.setState({
            yes : !this.state.yes
        })
    }
    
    render(){
        const {on, open} = this.state;
        return(
            <View style={{flex:1, backgroundColor: '#212126'}}>
                
                

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingLeft: 10}}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}>
                    <Image style={{height:30, width:30 }} source={require('./assets/images/back.png')}/>
                    
                </TouchableOpacity>

            </View>
            <View style={{paddingHorizontal: 105, justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                <Text style={{color: 'white', fontSize: 15}}>
                    SERVICES
                </Text>
            </View>
            </View>



            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15}}>
            <View style={{backgroundColor: '#a0a0a5', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
                <ButtonWork
                 value = {this.state.on}
                 onPress = {() => this.status()}/>
                


                </View>

                <View style={{backgroundColor: '#a0a0a5', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
                <ButtonWork
                 value = {this.state.open}
                 onPress = {() => this.status1()}/>
                </View>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={{color: 'white'}}>
                    MOPPING

                </Text>

                <Text style={{color: 'white'}}>
                    CLEANING

                </Text>

            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
            <View style={{backgroundColor: '#a0a0a5', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
            <ButtonWork
                 value = {this.state.yes}
                 onPress = {() => this.status2()}/>
                </View>
                <View style={{paddingVertical: 14}}>
                <Text style={{color: 'white'}}>
                    VACUUM
                </Text>
                </View>

            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 60}}>
            {/* <View style={{backgroundColor: '#5d5dff', height: 150, width: 150, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}> */}
                <TouchableOpacity style={{backgroundColor: '#5d5dff', height: 150, width: 150, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}} onPress = {() => this.props.navigation.navigate("Work")}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    START
                </Text>
                </TouchableOpacity>
            {/* </View> */}

            </View>



            </View>
        )
    }
}