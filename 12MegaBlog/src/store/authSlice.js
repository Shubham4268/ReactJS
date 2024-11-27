import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status : false,                 //status being false means the user is not logged in.
    userData : null
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login: (state, action) => {     // When login is dispatched, it affects this login action.    
            state.status = true         // as soon as user logs in status changes to true
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }   
})

export default authSlice.reducer;
export const {login,logout} = authSlice.actions