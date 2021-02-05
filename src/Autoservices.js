import React, { Component } from 'react';
import { Text, View,TouchableOpacity, Image} from 'react-native';
//import ButtonWork from './ButtonWork';
import Autobuttonwork from './Autobuttonwork';
import ModalComponent from './ModalComponent';
import instance from './Baseurl';
import Axios from 'axios';

export default class Myservices extends React.Component{
    state = {
        on : false,
        open : false,
        yes: false,
        disability : false

    }

        alert = () => {
        alert('Your car has been started working');
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
    console.log("Brus is on");
    let BaseURL= 'http://192.168.1.109:90';
    let EndPoint = '/Bup';
    console.log(`${BaseURL}${EndPoint}`, 'brushOn')
        Axios.get(
            `${BaseURL}${EndPoint}` , '',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    sccode: '601'
                }
            }
        ).then(res => console.log(res));
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
    console.log("Auto Brush is off")
        let BaseURL= 'http://192.168.1.109:90';
   let EndPoint = '/Bdown';
   console.log(`${BaseURL}${EndPoint}`, 'brusOff')
        Axios.get(
            `${BaseURL}${EndPoint}` , '',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    sccode: '601'
                }
            }
        ).then(res => console.log(res));
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
    console.log("Auto mop is on");
    let BaseURL= 'http://192.168.1.109:90';
let EndPoint = '/Aup';
console.log(`${BaseURL}${EndPoint}`, 'mopOn')
    Axios.get(
        `${BaseURL}${EndPoint}` , '',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
    ).then(res => console.log(res));
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
    this.setState({
        Campuses: response,
    }); { console.log("Data: ", this.state.Campuses); }
}).catch((error) => {
    console.log("Error ", error);
}) 
}
mopOff(){
    console.log("Auto Mop is down");
    let BaseURL= 'http://192.168.1.109:90';
let EndPoint = '/Adown';
console.log(`${BaseURL}${EndPoint}`, 'mopOff')
    Axios.get(
        `${BaseURL}${EndPoint}` , '',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
    ).then(res => console.log(res));
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
    console.log("Auto Vacuum is working");
    let BaseURL= 'http://192.168.43.196:90';
let EndPoint = '/Vup';
console.log(`${BaseURL}${EndPoint}`, 'vacuumOn')
    Axios.get(
        `${BaseURL}${EndPoint}` , '',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
    ).then(res => console.log(res));
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

   vacuumOff(){
    console.log("Auto map is not working");
        let BaseURL= 'http://192.168.1.109:90';
   let EndPoint = '/Vdown';
   console.log(`${BaseURL}${EndPoint}`, 'vacuumOff')
        Axios.get(
            `${BaseURL}${EndPoint}` , '',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    sccode: '601'
                }
            }
        ).then(res => console.log(res));
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

    
   onButtonChage = () =>{
    this.setState({
        isModalVisible: !this.state.isModalVisible,
        
    })
   }

    onBehindBackground = () => {
        this.setState({
         isModalVisible: false,
        })
    }


    render(){
        const {on, open, yes, disability} = this.state;
        
        return(
            <View style={{flex:1, backgroundColor: 'silver'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingLeft: 10}}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}>
                    <Image style={{height:30, width:30 }} source={require('./assets/images/autoback.png')}/>
                    
                </TouchableOpacity>

            </View>
            <View style={{paddingHorizontal: 105, justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                <Text style={{color: 'black', fontSize: 15}}>
                    SERVICES
                </Text>
            </View>
            </View>



            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15}}>
            <View style={{backgroundColor: '#e6e6e6', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
                <Autobuttonwork
                 value = {this.state.on}
                 onPress = {() => this.status()}/>
                


                </View>

                <View style={{backgroundColor: '#e6e6e6', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
                <Autobuttonwork
                 value = {this.state.open}
                 onPress = {() => this.status1()}/>
                </View>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={{color: 'black'}}>
                    MOPPING

                </Text>

                <Text style={{color: 'black'}}>
                    CLEANING

                </Text>

            </View>

            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 10}}>
            <View style={{backgroundColor: '#e6e6e6', height: 80, width: 80, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}>
            <Autobuttonwork
                 value = {this.state.yes}
                 onPress = {() => this.status2()}/>
                </View>
                <View style={{paddingVertical: 14}}>
                <Text style={{color: 'black'}}>
                    VACUUM
                </Text>
                </View>

            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 60}}>
              
                <TouchableOpacity disabled={ on == false && open == false &&  yes == false || this.state.disability} style={{backgroundColor: '#5d5dff', height: 150, width: 150, borderRadius: 150, justifyContent: 'center', alignItems: 'center'}}
              
   
                onPress={this.onButtonChage}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    START
                </Text>
                </TouchableOpacity>

            </View>
            <ModalComponent Visibility = {this.state.isModalVisible} textLabel = "Cleaner is working. If you want to stop it, press STOP" 
             touchableText = {this.onBehindBackground}
             modalButtonBackground = {{backgroundColor:'red', 
             alignItems: 'center',
             justifyContent: 'center',
             height: 150, width: 150, borderRadius: 150,
             paddingVertical: 15}}
             buttonText = "STOP"
             buttonShape = {{justifyContent: 'center', alignItems: 'center', paddingTop: 260}}
      />


            </View>
        )
    }
}