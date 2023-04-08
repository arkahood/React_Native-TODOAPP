/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import EachCard from './components/EachCard';
import Todo from './components/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EachTodo from './components/EachTodo';

const stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'black'} />
        {/* <View style={style.Header}>
          <Text style={style.HeaderText}>TODO APP</Text>
        </View> */}
        <stack.Navigator>
          <stack.Screen
            name="Home"
            // component={Todo}
            options={{title: 'TODO APP'}}>
            {props => <Todo {...props} />}
          </stack.Screen>
          <stack.Screen
            name="Expand"
            options={{title: 'TODO APP'}}
            initialParams={{title: 'Arka', des: 'Not'}}>
            {props => <EachTodo {...props} />}
          </stack.Screen>
        </stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  Header: {
    backgroundColor: 'white',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 3,
    // borderRadius: 5,
    borderColor: '#eaeaea',
    shadowColor: '#eaeaea',
    shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.9,
    shadowRadius: 3,
    // elevation: 3,
  },
  HeaderText: {
    color: 'black',
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});

export default App;
