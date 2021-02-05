import React, { Component } from 'react';
import { Text, View,Image, TouchableOpacity, Button} from 'react-native';
import Header from './Header';
import instance from './Baseurl';
import Modal from 'react-native-modal';
import ModalComponent from './ModalComponent';


export default class Work extends React.Component{


   state =  {
       on : false,
       Campuses : [],
       mode : false,
       headingColor : false,
       isModalVisible: false
       
   }



   onButtonChage = () =>{
    this.setState({
        on : !this.state.on,
        mode : !this.state.mode,
        headingColor : !this.state.headingColor,
        isModalVisible: !this.state.isModalVisible,
        
        
    })
   }

   onBehindBackground = () => {
       this.setState({
        isModalVisible: false,
       })
   }

//    componentDidMount(){
//     setTimeout(() => {
//         this.setState({
//             mode : !this.state.mode,
//         });
//     }, 3000);
// }


   getData(){
    instance
    .get('?Forward=1', {
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

   getreversedata(){
    instance
    .get('?Reverse=1', {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            sccode: '601'
        }
    }
    ).then((responsereverse) => {
        this.setState({
            Campuses: responsereverse,
        }); { console.log("Data: ", this.state.Campuses); }
    }).catch((error) => {
        console.log("Error ", error);
    })
    }

    getleftdata(){
        instance
        .get('?Left=1', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
        ).then((responseleft) => {
            this.setState({
                Campuses: responseleft,
            }); { console.log("Data: ", this.state.Campuses); }
        }).catch((error) => {
            console.log("Error ", error);
        })
    }

    getrightdata(){
        instance
        .get('?Right=1', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
        ).then((responseright) => {
            this.setState({
                Campuses: responseright,
            }); { console.log("Data: ", this.state.Campuses); }
        }).catch((error) => {
            console.log("Error ", error);
        })
    }

    Stop(){
        instance
        .get('?Stop=1', {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                sccode: '601'
            }
        }
        ).then((responseturnoff) => {
            this.setState({
                Campuses: responseturnoff,
            }); { console.log("Data: ", this.state.Campuses); }
        }).catch((error) => {
            console.log("Error ", error);
        })
    }
    render(){
      

        const {on, mode, headingColor} = this.state;
        const screenColor = mode === false ? '#141414' : '#EAF0F1';
        const heading = headingColor === false? 'white' : 'black';

        return(

            <View style={{backgroundColor : screenColor, flex: 1}}>

                {/* <Header label = "Controller"/>             */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingLeft: 10}}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ManualServices")}>
                    <Image style={{height:30, width:30 }} source={require('./assets/images/back.png')}/>
                    
                </TouchableOpacity>

            </View>
            <View style={{paddingHorizontal: 85, justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
                <Text style={{color: heading, fontSize: 15}}>
                    CONTROLLER
                </Text>
            </View>
            </View>
                <View style={{marginTop: 20, backgroundColor: '#1c1c1c', borderRadius: 15, justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 150, marginLeft: 135}}>
                <TouchableOpacity
                onPress = {() => this.onButtonChage()}
                style ={{}}>
                    {
                        on === !true ?     <Image style={{height:40, width: 40}} source={require('./assets/images/moon.png')} /> :     <Image style={{height:40, width: 40}} source={require('./assets/images/sun.png')} />
                    }
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 8, paddingTop: 10}}>
                    {
                        on === !true ? <Text style={{color: heading}}>Dark Mode is on</Text> : <Text>Light Mode is on</Text> 
                    }
                    
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{backgroundColor: '#1c1c1c', alignItems: 'center', borderRadius: 50, height: 300, width: 80, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress = {() => this.getData()}>
                    {/* <Text style={{fontSize: 25, color: 'white'}}>
                      + 
                    </Text> */}

                    <Image source = {require('./assets/images/Up.png')}/>
                </TouchableOpacity>

                <Text style={{color: 'white'}}>
                    U/D
                </Text>

                <TouchableOpacity onPress = {() => this.getreversedata()}>
                        <Image source = {require('./assets/images/Down.png')}/>
                </TouchableOpacity>

                </View>

                <View style={{justifyContent: 'center'}}>
                  
                    <TouchableOpacity onPress = {() => this.Stop()}>
                    <Image style={{height:40, width: 40}} source={require('./assets/images/power.png')}/>
                    </TouchableOpacity>
                </View>

                

                <View style={{backgroundColor: '#1c1c1c', alignItems: 'center', borderRadius: 50, height: 300, width: 80, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress = {() => this.getleftdata()}>
                    <Image source = {require('./assets/images/Left.png')}/>
                </TouchableOpacity>

                <Text style={{color: 'white'}}>
                    L/R
                </Text>

                <TouchableOpacity onPress = {() => this.getrightdata()}>
                <Image source = {require('./assets/images/Right.png')}/>
                </TouchableOpacity>

                </View>

                </View>


                


                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 40}}>
                    <View style={{}}>
                        <TouchableOpacity>
                        <Image style={{height: 25, width: 25}} source = {require('./assets/images/wifi.png')}/>
                        </TouchableOpacity>

                    </View>

                    <View style={{}}>
                        <TouchableOpacity>
                        <Image style={{height: 25, width: 25}} source = {require('./assets/images/setting.png')}/>
                        </TouchableOpacity>

                    </View>
                </View>

       
      <ModalComponent Visibility = {this.state.isModalVisible} textLabel = "Screen Mode Successfully Changed" behindBackground = {this.onBehindBackground}
      touchableText = {this.onBehindBackground} modalButtonBackground = {{backgroundColor:'#5d5dff', 
      alignItems: 'center',
      paddingVertical: 10}}
      buttonText = "ALRIGHT"
      />
      
      
      </View>
        )
    }
}