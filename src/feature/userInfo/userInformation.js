import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUserInformation: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phoneNumber = action.payload.phoneNumber
        },
    },
})

// Action creators are generated for each case reducer function
export const { SetUserInformation } = userSlice.actions

export default userSlice.reducer