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

function App(): JSX.Element {
  const [data, setData] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([]);

  const increaseIt = () => {
    if (title.length === 0) console.warn('Plase Enter Title');
    else if (description.length === 0) console.warn('Please Enter Description');
    else {
      setData(oldState => oldState + 1);
      setTodo((oldData): any => {
        return [...oldData, {id: data, title: title, description: description}];
      });
      setTitle('');
      setDescription('');
    }
  };
  const handleDelete = (id: any) => {
    let myArray = todo.filter((obj: any) => {
      return obj.id !== id;
    });
    setTodo(myArray);
    setData((olddata: any) => olddata - 1);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'black'} />
      <View style={style.Header}>
        <Text style={style.HeaderText}>TODO APP</Text>
      </View>
      <Todo />
    </SafeAreaView>
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
