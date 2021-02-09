import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import StyleButton from '../StyledButton/index';
import styles from './styles';


const CarItem = (props) => {
  const {name, tagline, image, taglineCTA}=props.car;
    return(
    <View style={styles.carContainer}>
       <ImageBackground source={image} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            {tagline} {''}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </Text>
          
        </View>
        <View style={styles.buttonsContainer}>
          <StyleButton type="primary" content={"Custom Order"} onPress={()=>{console.warn('Custom order was pressed');}} />
          <StyleButton type="secondary" content={"Existing Inventory"} onPress={()=>{console.warn('Existing Inventory was pressed');}} />
        </View>
     </View>
    )
}
export default CarItem;