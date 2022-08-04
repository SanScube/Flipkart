import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login(state, action) {
            state.user = action.payload
            localStorage.setItem("fliptoken", action.payload)
        },
        logout(state) {
            state.user = null
            localStorage.removeItem("fliptoken")
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getToken.pending, () => {
            console.log("pending")
        }).addCase(getToken.fulfilled, () => {
            state.data = action.payload;
        }).addCase(getToken.rejected, () => {
            console.log("rejected")
        })
    }
})


export const getToken =createAsyncThunk("user/login",async()=>{
    const res =await axios.post("http://127.0.0.1:3333/login",{
        
    }).

})







export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;