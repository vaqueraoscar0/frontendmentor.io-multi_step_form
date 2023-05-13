import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment } from '../feature/page/pageNumber'
import {SetAddOnPlanSelection, SetBillingPlanChanged} from '../feature/addOnPlan/addOnPlan'

const planOptions = ['Online Service', 'Larger Storage', 'Customizable profile']
const planDes = ['Access to multiplayer games','Extra 1TB of cloud save','Custom theme on your profile']
const planPricing = ['+$10/yr','+$20/yr','+$20/yr']
const planPricing2 = ['+$1/mo','+$2/mo','+$2/mo']

function AddOns() {
    const dispatch = useDispatch()
    const [billingPlan] = useState(useSelector((state) => state.bill.value))
    const [checkedItems, setCheckedItems] = useState(useSelector((state) => state.addOn.addon_plan_type))

    useEffect(() =>{
        if(billingPlan === "Yearly"){
            dispatch(SetBillingPlanChanged(true))
        }else {
            dispatch(SetBillingPlanChanged(false))
        }
    }, [billingPlan, dispatch])


    const handleSubmit = (event) => {
        event.preventDefault()
    };

    const updateSelection = (value, index) =>{
        dispatch(SetAddOnPlanSelection({value: value, index: index, price: checkedItems[index].price }))
        setCheckedItems([
            ...checkedItems.slice(0, index),
            {
                service: checkedItems[index].service,
                checked: value,
                price: checkedItems[index].price
            },
            ...checkedItems.slice(index+1)
        ])
    }


    return (
        <div className={'step_form'}>
            <Form onSubmit={handleSubmit} className={'step_form_body'}>
                <div className={'pi_title'}>
                    <h1 className={'pi_h1'}>Pick add-ons</h1>
                    <span className={'pi_span'}>Add-ons help enhance your gaming experience.</span>
                </div>
                <div className={'pi_input'}>
                    <div className={"addon_option"}>
                        {planOptions.map((value, idx) => (
                            <button type={'button'} key={idx} className={!checkedItems[idx].checked ? 'addon_option_box' : 'addon_option_box_selected'} onChange={() => updateSelection(!checkedItems[idx].checked, idx)}>
                                <div className={'button_addon_format'}>
                                    <div className={'input_addon_toggle'}>
                                        <Form.Check aria-label="option 1" className={'form_addon_checkbox'} onChange={() => updateSelection(!checkedItems[idx].checked, idx)} checked={checkedItems[idx].checked}/>
                                        <div className={'button_addon_text'}>
                                            <h4 className={'button_addon_h4'}>{value}</h4>
                                            <span>{planDes[idx]}</span>
                                        </div>
                                    </div>
                                    <span>{billingPlan === 'Yearly' ? planPricing[idx] : planPricing2[idx]}</span>
                                </div>
                            </button>

                        ))}
                    </div>
                </div>
                <div className={'pi_button_plan'}>
                    <span onClick={() => dispatch(decrement())}>Go Back</span>
                    <Button variant={"primary"} type={"submit"} onClick={() => dispatch(increment())}>
                        Next Step
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AddOns;