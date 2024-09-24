import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload; // Storing user data in the state
            state.error = null;
        },
        signinFailure: (state , action) =>{
            state.loading = false;
            state.error = action.payload;  // Storing user data in the state
        }
    }
})

export const {signinStart , signinFailure , signinSuccess} = userSlice.actions

export default userSlice.reducer;