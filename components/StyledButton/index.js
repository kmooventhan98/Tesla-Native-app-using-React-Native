import React from 'react'
import { Text, View, Pressable } from "react-native";
import styles from './styles';

const StyleButton = (props)=> {
    // const type=props.type;
    // const content=props.content;
    // const onPress=props.onPress;

    const {type,content,onPress}=props;
    //above three lines are replaced by this line
    const backgroundColor = type === 'primary' ? '#404040' : '#cfcfcf';
    const textColor = type === 'primary' ? '#cfcfcf' : '#404040';
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button,{backgroundColor: backgroundColor}]}
            onPress={()=>onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>

            </Pressable>
        </View>
    )
}

export default StyleButton;