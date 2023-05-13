import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    plan_type: 'Arcade',
    pricing: 9,

}

export const gamePlanSlice = createSlice({
    name: 'gamePlan',
    initialState,
    reducers: {
        SetPlanSelection: (state, action) => {
            state.plan_type = action.payload.plan_type
            state.pricing = action.payload.pricing

        },
    },
})

// Action creators are generated for each case reducer function
export const { SetPlanSelection } = gamePlanSlice.actions

export default gamePlanSlice.reducer