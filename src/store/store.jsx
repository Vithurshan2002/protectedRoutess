import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../slices/userslice'
const store=configureStore({
        reducer:{
            userInfor:UserReducer,
        }
})
export default store;