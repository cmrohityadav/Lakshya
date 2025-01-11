import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomBtn = ({title,onPress}) => {
  return (
    <View >
    <TouchableOpacity onPress={onPress}
    style={styles.container}


    >
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    
    </View>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#66BB6A",
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:50,
        width:250,
        borderRadius:40


    },
    title:{
        textAlign:'center',
        color:'white'
    }
})