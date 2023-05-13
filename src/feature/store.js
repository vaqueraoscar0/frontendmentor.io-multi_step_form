import {configureStore} from '@reduxjs/toolkit'
import pageSlice from "./page/pageNumber";
import billSlice from "./billPlan/billingPlan";
import userSlice from "./userInfo/userInformation";
import gamePlanSlice from "./gameOptionPlan/gameOptionPlan";
import addOnSlice from "./addOnPlan/addOnPlan";

export const store = configureStore({
    reducer: {
        page: pageSlice,
        bill: billSlice,
        user: userSlice,
        gamePlan: gamePlanSlice,
        addOn: addOnSlice,
    },
})