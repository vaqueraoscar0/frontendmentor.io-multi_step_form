import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    addon_plan_type: [{service:'Online Service', checked: false, price: 1}, {service:'Larger Storage', checked: false, price: 2}, {service:'Customizable profile', checked: false, price: 2}],
}

export const addOnSlice = createSlice({
    name: 'addOn',
    initialState,
    reducers: {
        SetAddOnPlanSelection: (state, action) => {
            let checkedData = state.addon_plan_type


            state.addon_plan_type = [
                ...checkedData.slice(0, action.payload.index),
                {
                    service: checkedData[action.payload.index].service,
                    checked: action.payload.value,
                    price: checkedData[action.payload.index].price
                },
                ...checkedData.slice(action.payload.index+1)
            ]

        },
        SetBillingPlanChanged: (state, action) => {
            let checkedData = state.addon_plan_type

            if(action.payload === true){
                state.addon_plan_type = [
                    {
                        service: checkedData[0].service,
                        checked: checkedData[0].checked,
                        price: 10
                    },
                    {
                        service: checkedData[1].service,
                        checked: checkedData[1].checked,
                        price: 20
                    },
                    {
                        service: checkedData[2].service,
                        checked: checkedData[2].checked,
                        price: 20
                    },
                ]
            }else{
                state.addon_plan_type = [
                    {
                        service: checkedData[0].service,
                        checked: checkedData[0].checked,
                        price: 1
                    },
                    {
                        service: checkedData[1].service,
                        checked: checkedData[1].checked,
                        price: 2
                    },
                    {
                        service: checkedData[2].service,
                        checked: checkedData[2].checked,
                        price: 2
                    },
                ]
            }

        },
    },
})

// Action creators are generated for each case reducer function
export const { SetAddOnPlanSelection, SetBillingPlanChanged } = addOnSlice.actions

export default addOnSlice.reducer