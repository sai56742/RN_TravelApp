/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/Login';
import Register from './src/Register';
import BottomTab from './src/BottomTab'
import CheckUserName from './src/CheckUserName';
import ResetPassword from './src/ResetPassword';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => CheckUserName);
// AppRegistry.registerComponent(appName, () => ResetPassword);

