import React from 'react';
import {View} from 'react-native';

export const Box3 = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection : 'row',
            width: 500,
            height: 500,
            justifyContent: 'space-between',
            //borderWidth: 4,
          //borderColor: '#20232a',
          //borderRadius: 6,
          //backgroundColor: 'black', 
          }}>
            <View style={{
                width:100,
              height: 'auto',
              backgroundColor:'red',
            }} />
            <View style={{
                width:100,
              height: 'auto',
              backgroundColor:'blue',
            }} />
          </View>
      );
}