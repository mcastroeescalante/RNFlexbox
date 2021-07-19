import React, {useState} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import {Box1} from './Box1';
import {Box2} from './Box2';
import {Box3} from './Box3';

export const Layout:React.FC = () =>{
    let [box, setBox] = useState<number>(1);
    const boxes = [{number:1,name:"Box 1"}, {number:2,name:"Box 2"}, {number:3,name:"Box 3"}];

    return(
        <View  style={{
            alignItems: 'center',
            height:500,
        }}>
            <View  style={{
                    flexDirection: 'row',
                }}>
                    {boxes.map((item)=>(
                        <TouchableHighlight
                        style={{
                            padding: 10,
                        }}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => setBox(item.number)}>
                            <Text>{item.name}</Text>
                        </TouchableHighlight>
                    ))}
            </View>
            

             <View>
             {(() => {
  
                switch (box) {
                    case 1:
                        return (
                        <Box1 />
                        )
                    case 2:
                        return (
                        <Box2 />
                        )
                    case 3:
                        return (
                        <Box3 />
                        )
                }

                })()}
            </View>
        </View> 
    );
}