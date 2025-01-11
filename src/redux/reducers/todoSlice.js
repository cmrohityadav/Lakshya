import {createSlice} from "@reduxjs/toolkit"
export const todoSlice=createSlice({
    name:'todo',
    initialState:{
        data:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todoData={
                id:state.data?.length+1,
                sTitle:action.payload.sTitle,
                sDiscription:action.payload.sDiscription
            }
            state.data=[todoData,...state?.data]
        },
        deleteTodo:(state,action)=>{
            state.data=state.data.filter((eachItem)=>eachItem?.id!==action.payload.id)
        },
        updateTodo:(state,action)=>{

            const {id,sTitleInput,sDiscriptionInput}=action.payload
            const index=state.data.findIndex((item)=>item.id==id)
            if(index!==-1){
                state.data[index]={...state.data[index],sTitle:sTitleInput,sDiscription:sDiscriptionInput}
            }
        }
    }
})
export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer