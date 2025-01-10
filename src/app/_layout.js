import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Provider} from 'react-redux'
import { store ,persistor} from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Stack } from 'expo-router'
const Layout = () => {
  return (
    <Provider store={store} >
     <PersistGate loading={null} persistor={persistor}>
<StatusBar style='light' backgroundColor="blue" translucent={false} />
            <Stack screenOptions={{headerShown:false}} >
                <Stack.Screen name='index' />
                <Stack.Screen name='home' />
                <Stack.Screen name='addtodo' />
            </Stack>
     </PersistGate>
    </Provider>
  )
}

export default Layout

const styles = StyleSheet.create({})