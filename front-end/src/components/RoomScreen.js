import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-animatable';

class RoomScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: ['Player B', 'Player C']
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displaySection}>
                    <Text style={styles.nameText}>You are: Player A</Text>
                </View>
                <View style={styles.inputSection}>
                        {this.state.players.map((name) => (
                            <Text
                                animation="slideInUp"
                                key={name}
                                style={styles.playerText}
                                onPress={() => this.props.navigation.navigate('Game', { name })}
                            >{name}</Text>))}
                </View>
            </View>
        );
    }
}

export default RoomScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    displaySection: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#9E6D29',
        justifyContent: 'center'
    },
    inputSection: {
        flex: 8, 
        backgroundColor: '#BA8F64'
    },
    playerText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#9E6D29',
    },
    nameText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
  });