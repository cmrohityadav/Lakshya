import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { navigate } from 'expo-router/build/global-state/routing';
import { router } from 'expo-router';
const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>router.navigate("/addtodo")}>
      <MaterialCommunityIcons name="calendar-plus" size={54} color="black" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:35,
        right:20,
        elevation:10,
        
    }
})