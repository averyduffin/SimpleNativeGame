import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { subscribeToTimer } from './src/api';
import Navigation from './src/Navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet',
      isLoadingComplete: false,
    };
    subscribeToTimer((err, timestamp) => {
      this.setState({ timestamp }) 
    });
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* <Text>This is the timer value: {this.state.timestamp}</Text> */}
          <Navigation />
        </View>
      );
    }
  }
  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/robot-dev.png'),
        // require('./assets/helmet.svg'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'k2d': require('./assets/fonts/K2D-ExtraBold.ttf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BA8F64',
  },
});