import React from 'react';
import {View} from 'react-native';

export const Box1 = () => {
    return (
        <View style={{
          flex: 1,
          width: 500,
          height: 20,
          borderWidth: 4,
          borderColor: '#20232a',
          borderRadius: 6,
          backgroundColor:'#61dafb',          
        }}>
          <View style={{
            flex: 1,
            backgroundColor:'blue',
          }} />
          <View style={{
            flex: 1,
            backgroundColor:'red',
          }} />
          <View style={{
            flex: 1,
            backgroundColor:'yellow',
          }} />
        </View>
      );
}