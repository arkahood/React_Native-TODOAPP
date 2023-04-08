import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const EachCard = ({title, description, handleDelete, id}: any) => {
  const [des, setDes] = useState(description);
  useEffect(() => {
    if (des.length > 10) {
      setDes(des.substring(0, 10) + ' ...');
    }
  });
  return (
    <View style={style.Container}>
      <Text style={style.Header}>{title}</Text>
      <Text style={style.Body}>{des}</Text>
      <View style={{display: 'flex', alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <View style={style.Button}>
            <Text style={{color: 'white'}}>DELETE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  Header: {
    fontSize: 30,
  },
  Body: {
    fontSize: 15,
  },
  Button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    padding: 10,
    borderRadius: 5,
  },
});

export default EachCard;
