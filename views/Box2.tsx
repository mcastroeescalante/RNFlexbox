import React from 'react';
import {View} from 'react-native';

export const Box2 = () => {
    return (
        <View style={{
          flex: 1,
          width: 500,
          height: 500,
          borderWidth: 4,
          borderColor: '#20232a',
          borderRadius: 6,
          backgroundColor:'#61dafb',
        }}>
          <View style={{
            flex: 1,
            height: 'auto',
            flexShrink: 1,
            backgroundColor: 'red',
            flexDirection:'row',
          }}>
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
          </View>
          <View style={{
            flex: 1,
            height: 'auto',
            backgroundColor: 'yellow',
            flexDirection:'row',
          }}>
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
          </View>
          <View style={{
            flex: 1,
            height: 'auto',
            backgroundColor: 'blue',
            flexDirection:'row',
          }}>
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
            <View style={{
              flex: 1,
              width: 50,
              height: 'auto',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
            }} />
          </View>
        </View>
      );
}