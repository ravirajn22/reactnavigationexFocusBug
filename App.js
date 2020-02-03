/**
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { NavigationNativeContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function Dashboard(props) {
  return(
    <View>
      <Text>Dashboard Screen</Text>
      <Button 
        title='go to my events' 
        onPress={() => props.navigation.navigate('Events', {screen: 'Myevent'})} 
      />
      <Button 
        title='go to all events' 
        onPress={() => props.navigation.navigate('Events', {screen: 'Allevent'} )}
      />
    </View>
  )
}

class Myevent extends React.Component {

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      // Will be called twice when navigated from dashboard buttons
      console.warn('Myevent focus');
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View>
        <Text>Myevent</Text>
      </View>
    );
  }
}

class Allevent extends React.Component {

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      // Will be called twice when navigated from dashboard buttons
      console.warn('Allevent focus');
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return(
      <View>
        <Text>Allevent</Text>
      </View>
    );
  }
}

function EventsTab() {
  return(
    <TopTab.Navigator>
      <TopTab.Screen name='Myevent' component={Myevent} />
      <TopTab.Screen name='Allevent' component={Allevent} />
    </TopTab.Navigator>
  );
}


const App = () => {
  return (
    <View style={{paddingTop: 80, flex: 1}} >
      <StatusBar barStyle="dark-content" />
      <NavigationNativeContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name='Dashboard' component={Dashboard} />
          <BottomTab.Screen name='Events' component={EventsTab} />
        </BottomTab.Navigator>
      </NavigationNativeContainer>
    </View>
  );
};


export default App;
