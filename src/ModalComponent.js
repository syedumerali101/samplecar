import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

export default class ModelComponent extends React.Component {
    static propTypes = {
        textLabel : PropTypes.string,
        behindBackground: PropTypes.func,
        touchableText : PropTypes.func
      };

      static defaultProps = {
        
        textLabel: '',
        behindBackground: undefined,
        touchableText: undefined
      };

    render(){
        return(
            <View style={styles.container}>    
            <Modal backdropOpacity = {0.80} isVisible={this.props.Visibility} onBackdropPress={this.props.behindBackground}>
            <View style={styles.modalView}>
            <View style={this.props.buttonShape}>
            <Text style={styles.modalTextView}>{this.props.textLabel}</Text>
            <TouchableOpacity onPress = {this.props.touchableText} style={this.props.modalButtonBackground}>
                <Text style={styles.modalButtonText}>
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
            
            </View>
          </View>
        </Modal>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    modalView : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalTextView: {
        color: 'white',
        fontSize: 16
    },


    modalButtonText : {
    color: 'white',
    fontSize: 15,
    }
})
