import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '@/redux/reducers/todoSlice';
import CustomBtn from './CustomBtn';
import Fontisto from '@expo/vector-icons/Fontisto';
import { width as screenW ,height as heightH, width} from '@/utils/constant';

const TodoItem = ({ data }) => {
    

    const [visibleModal, setVisibleModal] = useState(false)
    const { id, sTitle, sDiscription } = data
    const [sTitleInput, setTitleInput] = useState(sTitle)
    const [sDiscriptionInput, setDiscriptionInput] = useState(sDiscription)
    const dispatch = useDispatch()
    const onDelete = async () => {
        dispatch(deleteTodo({ id: id }))
    }

    const onUpdate = async () => {
        if (sTitle.trim() == "" || sDiscription.trim() == "") {
            Alert.alert("Please enter something")
            return;
        }
        await dispatch(updateTodo({ id,sTitleInput, sDiscriptionInput }))
        setVisibleModal(false)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{sTitle}</Text>
                    <Text style={styles.description}>{sDiscription}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.updateButton} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.actionText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                        <Text style={styles.actionText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.modalContainer}>
                <Modal visible={visibleModal}  transparent={true} onRequestClose={() => setVisibleModal(false)} style={styles.mainModal}>

                    <View style={styles.modal}>
                    <Fontisto name="close" size={34} color="white" style={styles.closeBtn} onPress={()=>setVisibleModal(false)}/>
                        <TextInput
                            placeholder="Write here title......."

                            style={[styles.input, styles.title]}
                            value={sTitleInput}
                            onChangeText={(txt) => setTitleInput(txt)}
                        />
                        <TextInput
                            placeholder="Add discription....."
                            multiline

                            numberOfLines={5}
                            style={[styles.input, styles.discription]}
                            value={sDiscriptionInput}
                            onChangeText={(txt) => setDiscriptionInput(txt)}

                        />

                        <CustomBtn title='Update' onPress={onUpdate}  />
                    </View>
                </Modal>
                </View>
                
            </View>
        </>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    actions: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    deleteButton: {
        backgroundColor: '#ff4d4f',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    actionText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        position:'absolute',
        top:200,
        width:screenW,
        height:heightH*0.5,
        alignItems:'center',
        justifyContent:'center',
        
        
        
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#ccc',
        margin: 15,
        borderRadius: 10,
        height: 50,
        width:screenW*0.9

    },
    title: {
        fontWeight: '800',
        fontSize: 15
    },
    discription: {
        height: 120,


    },
    mainModal:{
       
    },
    closeBtn:{
        position:'absolute',
        right:20,
        top:8
    }
   
});
