import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import GamePiece from './GamePiece'

class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                ['X',0,0,1,1,1,1,1,0,0,'X'],
                [0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0],
                [1,0,0,0,0,2,0,0,0,0,1],
                [1,0,0,0,2,2,2,0,0,0,1],
                [1,1,0,2,2,2,2,2,0,1,1],
                [1,0,0,0,2,2,2,0,0,0,1],
                [1,0,0,0,0,2,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0],
                ['X',0,0,1,1,1,1,1,0,0,'X'],
            ]
        }
    }
    render() {
        const name = this.props.navigation.getParam('name', 'None');
        return (
        <View style={styles.container}>
            <View style={styles.displaySection}>
                <Button
                    title="Quit"
                    large
                    raised
                    buttonStyle={styles.button}
                    // icon={{name: 'envira', type: 'font-awesome'}}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>{name}</Text>
            </View>
            <View style={styles.inputSection}>
                {this.renderBoard()}
            </View>
        </View>
        );
    }
    renderBoard() {
        const rows = [];
        this.state.board.forEach((row, r) => {
            const columns = [];
            row.forEach((space, i) => {
                columns.push(<GamePiece 
                    value={space}
                    row={r}
                    column={i}
                    key={r + "-" + i} 
                    onPress={() => alert(`Row: ${r} Column: ${i}`)}
                />)
            });
            rows.push(<View style={styles.inputRow} key={"row-" + r}>{columns}</View>)
        });
        return rows
    }
}

export default GameScreen;


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
        paddingTop:30,
        paddingBottom:30,
        backgroundColor: '#BA8F64'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        backgroundColor: "#28160B",
        padding: 10
    },
  });