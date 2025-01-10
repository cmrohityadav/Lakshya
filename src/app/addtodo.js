import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '@/components/CustomHeader'
import CustomBtn from '@/components/CustomBtn'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/redux/reducers/todoSlice'
import { router } from 'expo-router'

const AddTodo = () => {
    const dispatch=useDispatch()
    const [sTitle, setTitle] = useState('')
    
    const [sDiscription, setDiscription] = useState('')

    const submit = async () => {
        if(sTitle.trim()=="" || sDiscription.trim()==""){
            Alert.alert("Please enter something")
            return;
        }
         await dispatch(addTodo({sTitle,sDiscription}))
        router.back()
    }
    return (
        <View style={styles.container}>
            <CustomHeader title='Add New Lakshya' bIsBack={true} />
            <TextInput
                placeholder="Write here title......."

                style={[styles.input, styles.title]}
                value={sTitle}
                onChangeText={(txt) => setTitle(txt)}
            />

            <TextInput
                placeholder="Add discription....."
                multiline
                
                numberOfLines={5}
                style={[styles.input, styles.discription]}
                value={sDiscription}
                onChangeText={(txt) => setDiscription(txt)}
                
            />

            <CustomBtn title='ADD' onPress={submit} />



        </View>
    )
}

export default AddTodo


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: "white",


    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        margin: 15,
        borderRadius: 10,
        height: 50,

    },
    title: {
    fontWeight:'800',
    fontSize:15
    },
    discription: {
        height: 120,
        

    }


})