import AsyncStorage  from '@react-native-async-storage/async-storage'
import rootReducer from './rootReducer'
import {PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { FLUSH } from 'redux-persist/es/constants'
import persistStore from 'redux-persist/es/persistStore'
const persistConfig={
    key:'root',
    storage:AsyncStorage,
    blacklists:[],
    whitelist:['todo']

}
const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE],
            }
        })


       
})


export const persistor=persistStore(store)