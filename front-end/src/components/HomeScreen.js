import React from 'react';
import { StyleSheet  } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { Text, View, Image } from 'react-native-animatable';

class HomeScreen extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.text} animation="slideInDown">Hnefatafl</Text>
                    <View style={styles.imageContainer} >
                        <Image
                            animation="slideInDown"
                            style={styles.helmetImage}
                            source={require('../../assets/helmet.png')}
                        />
                    </View>
                    <View
                        animation="slideInLeft"
                        style={styles.buttonContainer}
                    >
                        <Button
                            title="Go to Game"
                            large
                            raised
                            buttonStyle={styles.button}
                            // icon={{name: 'envira', type: 'font-awesome'}}
                            onPress={() => this.props.navigation.navigate('Room')}
                        />
                    </View>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'k2d',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#28160B',
    },
    imageContainer: {
        paddingTop: 20,
    },
    buttonContainer: {
        paddingTop: 100,
    },
    button: {
        backgroundColor: "#28160B",
        padding: 10
    },
    helmetImage: {
        width: 100,
        height: 100,
    }
});