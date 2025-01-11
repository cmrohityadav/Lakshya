import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '@/components/CustomHeader'
import AddButton from '@/components/AddButton'
import { width as screenWidth,height  as screenHeight} from '@/utils/constant'
const Home = () => {

    // const data=useSelector((state)=>state.todo.data)
    console.log(data)
    const data=[]

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
        ListEmptyComponent={<View style={styles.listEmpty}>
        <View style={styles.listEmptyImageContainer}>
            <Image 
            style={styles.listEmptyImage}
              source={require('./../assets/images/add.png')}
            />
        </View>
          <Text  style={styles.listEmptyText}>
            Click on Below Plus button to add your Lakshya
          </Text>
        </View>}
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
    
  },
  listEmpty:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
  },
  listEmptyImage:{
    width:screenWidth*.8,
    height:screenHeight*.4,
    margin:10,
    resizeMode:"contain"
  },
  listEmptyText:{
    textAlign:'center',
    marginTop:30,
    fontSize:15

  }

})

export default Home