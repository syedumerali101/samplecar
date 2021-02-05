import React, { Component } from 'react';
import { Text, View,TouchableOpacity, Button, Alert, Switch, ScrollView} from 'react-native';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Dashboard',
    }

    state = {switchValue: false};

    toggleSwitch = value => {
        this.setState({switchValue: value})
    }

    state = {swtichValue1: false};

    // state = {switchValue: false};

    toggleSwitch1 = value => {
        this.setState({swtichValue1: value})
    }
    
    render() {
        return (
            
            
            <View style={{height:1000, borderWidth: 10, borderColor: '#2193b0'}}>



            
            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 15}}>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Home")}
            >
                <Text style={{color: 'black', fontSize: 15}}> WANT TO SELECT THE MODE AGAIN? </Text>
            </TouchableOpacity>

            </View>
            

            

                <View style={{paddingHorizontal: 100, paddingVertical: 20}}>
                <Button
          title="MOVE Forward"
          color="#32CD32"
          //onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
                </View>

                <View style={{flexDirection: "row", justifyContent: 'center'}}>

                <View style={{paddingHorizontal: 10}}>
                <Button
          title="LEFT"
          color="#32CD32"
          //onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
                </View>
                <View style={{paddingHorizontal: 10}}>
                <Button
          title="BACK"
          color="#32CD32"
          //onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
                </View>
                <View style={{paddingHorizontal: 10}}>
                <Button
          title="RIGHT"
          color="#32CD32"
          //onPress={() => Alert.alert('Button with adjusted color pressed')}
        />


        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>
                        {this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}
                        
                    </Text>

                    <Switch style={{marginTop: 30}}
                        onValueChange = {this.toggleSwitch}
                        value={this.state.switchValue}/>


                </View> */}
                </View>

                </View>

                <View style={{justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}>


                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Text>
                        {this.state.switchValue ? 'Mopping is ON' : 'Mopping is OFF'}
                        
                    </Text>

                    <Switch style={{marginTop: 5}}
                        onValueChange = {this.toggleSwitch}
                        value={this.state.switchValue}/>


                </View>


                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Text>
                        {this.state.swtichValue1 ? 'Vacum is ON' : 'Vaccum is OFF'}
                        
                    </Text>

                    <Switch style={{marginTop: 5}}
                        onValueChange = {this.toggleSwitch1}
                        value={this.state.swtichValue1}/>


                </View>

                </View>

                <View>
                <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Open Drawer"
            />
                </View>

                

            
            {/* <View style={{backgroundColor: 'blue'}}>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Home")}
            >
                <Text> This is DashboardScreen. Go to Home </Text>
            </TouchableOpacity>

            </View> */}

            </View>
            
            
        )
    }
}
