import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Monthly',
}

export const billSlice = createSlice({
    name: 'billPlan',
    initialState,
    reducers: {
        PlanType: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { PlanType } = billSlice.actions

export default billSlice.reducer