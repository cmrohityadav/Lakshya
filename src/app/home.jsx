import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '@/components/CustomHeader'
import AddButton from '@/components/AddButton'

const Home = () => {

    const data=useSelector((state)=>state.todo.data)
    console.log(data)

    const renderItem=({item})=>{

        return(
            <View>
                <Text>{item?.sTitle}</Text>
                <Text>{item?.sDiscription}</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <CustomHeader title='LAKSHYA'/>
      <FlatList

        data={data}
        ListEmptyComponent={<View></View>}
        initialNumToRender={10}
        windowSize={10}
        key={(items)=>items?.id}
        showsVerticalScrollIndicator={false}
        keyExtractor={(items)=>items?.id}

        renderItem={renderItem}
      />
      <AddButton/>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backGroundColor:"white"
    
  }
})

export default Home