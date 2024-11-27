import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
}

const postSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        setLoadOn : (state) => {
            state.loading = true
        },
        setLoadOff : (state) => {
            state.loading = false
        }
    }
})

export default postSlice.reducer;
export const {setLoadOn,setLoadOff} = postSlice.actions