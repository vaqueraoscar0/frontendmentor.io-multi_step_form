import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../feature/page/pageNumber'
import {SetPlanSelection} from "../feature/gameOptionPlan/gameOptionPlan";
import {PlanType} from '../feature/billPlan/billingPlan'
import {img_arr} from "../Img_data";

//Temp Data
const planOptions = ['Arcade', 'Advanced', 'Pro']
const planPricing = [9,12,15]
const planPricing2 = [90, 120, 150]

function SelectPlan() {
    const dispatch = useDispatch()
    const [billingPlan, setBillingPlan] = useState(useSelector((state) => state.bill.value))
    const [gamePlan, setGamePlan] = useState(useSelector((state) => state.gamePlan.plan_type))
    const [infoValidated, setInfoValidated] = useState(false);
    const [isPlanSelected, setIsPlanSelected] = useState(true)

    const handleSubmit = (event) => {
        if (!gamePlan) {
            event.preventDefault();
            setIsPlanSelected(false)

        }else{
            setIsPlanSelected(true)
            dispatch(increment())
        }

        setInfoValidated(true);
    };

    const handlePlanOption = () =>{
        if(billingPlan === 'Monthly'){
            setBillingPlan('Yearly')
            dispatch(PlanType('Yearly'))
            handleSelectionPlan('','')
        }else{
            setBillingPlan('Monthly')
            dispatch(PlanType('Monthly'))
            handleSelectionPlan('','')
        }
    }

    const handleSelectionPlan = (value, price) =>{
        dispatch(SetPlanSelection({plan_type:value, pricing: price}))
        setGamePlan(value)
    }


    return (
        <div className={'step_form'}>
            {!isPlanSelected &&
                <div className={"alert alert-danger text-center  "} style={{height: "25px", marginTop: "-35px"}} role="alert">
                    <p style={{fontSize: "16px", marginTop: "-14px"}}>You have not selected a Plan!</p>
                </div>
            }
            <Form noValidate validated={infoValidated} onSubmit={handleSubmit} className={'step_form_body'}>
                <div className={'pi_title'}>
                    <h1 className={'pi_h1'}>Select your plan</h1>
                    <span className={'pi_span'}>You have the option of monthly or yearly billing.</span>
                </div>
                <div className={'pi_input'}>
                    <div className={"plan_option"}>
                        {planOptions.map((value, idx) => (
                            <button type={'button'} key={idx} className={gamePlan === value ? 'plan_option_box1' :'plan_option_box'} onClick={() => handleSelectionPlan(value, billingPlan === 'Monthly'? planPricing[idx] : planPricing2[idx])}>
                                <div className={'button_plan_format'}>
                                    <div className={'button_img'}>
                                        <img src={img_arr[idx]} alt={'plan_img'}/>
                                    </div>
                                    <div className={'button_plan_text'}>
                                        <h4 className={'button_plan_h4'}>{value}</h4>
                                        <span>${billingPlan === 'Monthly'? planPricing[idx] + '/mo' : planPricing2[idx] + '/yr'}</span>
                                        {billingPlan === 'Yearly' && <p>2 months free</p>}
                                    </div>
                                </div>
                            </button>

                        ))}
                    </div>
                    <div className={'service_plan_box'}>
                        <h4 className={billingPlan === 'Monthly'? 'selectedPlanSwitch' : 'service_plan_box_h4'}>Monthly</h4>
                        <Form.Switch
                            checked={billingPlan === 'Yearly'}
                            className={'form_switch_plan'}
                            id={"custom-switch"}
                            onChange={handlePlanOption}
                        />
                        <h4 className={billingPlan === 'Yearly'? 'selectedPlanSwitch' : 'service_plan_box_h4'}>Yearly</h4>

                    </div>

                </div>
                <div className={'pi_button_plan'}>
                    <span onClick={() => dispatch(decrement())}>Go Back</span>
                    <Button variant={"primary"} type={'submit'}>
                        Next Step
                    </Button>
                </div>
            </Form>

        </div>
    );
}

export default SelectPlan;