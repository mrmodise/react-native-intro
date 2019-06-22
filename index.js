/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from "./HelloWorldApp";

AppRegistry.registerComponent(appName, () => HelloWorldApp);
