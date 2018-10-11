import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import RoomScreen from './components/RoomScreen';

const HomeStack = createStackNavigator({ Home: HomeScreen });
export default createSwitchNavigator({
    Home: HomeScreen,
    Game: GameScreen,
    Room: RoomScreen,
}, {
    initialRouteName: 'Home',
});