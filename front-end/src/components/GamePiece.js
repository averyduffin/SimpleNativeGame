import React, { Component } from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    Image
} from 'react-native';

export default class GamePeice extends Component {
    render() {
        const { onPress, value } = this.props;
        return (
            <TouchableHighlight 
                style={[styles.inputButton, this.props.highlight ? styles.inputButtonHighlighted : null]}
                underlayColor="#9E6D29"
                onPress={onPress}
            >
                <Image
                    animation="slideInDown"
                    style={styles.helmetImage}
                    source={this.getSource(value)}
                />
                {/* <Text style={styles.inputButtonText}>{value}</Text> */}
            </TouchableHighlight>
        )
    }
    getSource(value) {
        switch(value) {
            case 0: 
                return require('../../assets/circle-0.png')
            case 1:
                return require('../../assets/circle-1.png')
            case 2: 
                return require('../../assets/circle-2.png')
            case 'X':
                return require('../../assets/x.png')
        }
    }
}


const styles = StyleSheet.create({
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#9E6D29',
        backgroundColor: '#6B522F'
    },
    safeSpace: {
        backgroundColor: '#6B522F'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputButtonHighlighted: {
        backgroundColor: '#9E6D29'
    },
  });