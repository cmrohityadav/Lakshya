import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {useFonts} from 'expo-font'
import Logo from "../assets/images/icon.png"
 import { height,width } from '@/utils/constant'
import { resetAndNavigate } from '@/utils/Helpers'


const Index= () => {
  
  const [loaded]=useFonts({
    SpaceMono:require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  const [hasNavigated,setHasNavigated]=useState(false)
useEffect(()=>{
  if(loaded && !hasNavigated){
    const timeOutId=setTimeout(()=>{
      resetAndNavigate("/home")
    },1000)
    return  ()=>clearTimeout(timeOutId)

   
  }
 
},[loaded,hasNavigated])

  
  return (
    <View style={styles.container}>
     <Image source={Logo}
      style={styles.img}
     />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#fff'
  },
  img:{
    width:width*0.3,
    height:height*0.2,
  }
})