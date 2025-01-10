import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
const CustomHeader = ({title,bIsBack}) => {
  return (
    <View style={styles.container}>
    <View>
    <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.backButton} onPress={()=>router.back()}>
      {bIsBack && (<AntDesign name="back" size={30} color="black" />)}
      </TouchableOpacity>
    </View>
     
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0090B0',
        padding:15,
    },
    text:{
        // fontFamily:"SpaceMono",
        fontSize:19,
        fontWeight:'700',
        textAlign:'center'

    },
    backButton:{
        position:"absolute",
        bottom:0

    }

})