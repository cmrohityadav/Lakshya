import { Alert, Button, StyleSheet, Text, TextInput, View ,Platform} from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '@/components/CustomHeader'
import CustomBtn from '@/components/CustomBtn'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/redux/reducers/todoSlice'
import { router } from 'expo-router'
import DateTimePicker from '@react-native-community/datetimepicker'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [sTitle, setTitle] = useState('')

    const [sDiscription, setDiscription] = useState('')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (any, Date) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const showPicker = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };
    const submit = async () => {
        if (sTitle.trim() == "") {
            Alert.alert("Please enter title")
            return;
        }
        await dispatch(addTodo({ sTitle, sDiscription }))
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
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Selected Date: {date.toLocaleDateString()}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Selected Time: {date.toLocaleTimeString()}
            </Text>
            <Button title="Pick Date" onPress={() => showPicker('date')} />
            <Button title="Pick Time" onPress={() => showPicker('time')} />
            {show && <DateTimePicker
                value={date}
            mode={mode}
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            />}


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
        fontWeight: '800',
        fontSize: 15
    },
    discription: {
        height: 120,


    }


})