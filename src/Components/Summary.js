import '../App.css';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, incrementByAmount} from '../feature/page/pageNumber'

const planPricingMonthly = [{price: '$9/mo', planType:'Arcade'}, {price:'$12/mo', planType: 'Advanced'}, {price:'$15/mo', planType: 'Pro'}]
const planPricingYearly = [{price: '$90/yr', planType:'Arcade'}, {price:'$120/yr', planType: 'Advanced'}, {price:'$150/yr', planType: 'Pro'}]
const pricingYearly = [{price: '$10/yr', planType:'Online Service'}, {price:'$20/yr', planType: 'Larger Storage'}, {price:'$20/yr', planType: 'Customizable profile'}]
const pricingMonthly = [{price: '$1/mo', planType:'Online Service'}, {price:'$2/mo', planType: 'Larger Storage'}, {price:'$2/mo', planType: 'Customizable profile'}]

function Summary() {
    const dispatch = useDispatch()
    const billingPlan = useSelector((state) => state.bill.value)
    const gamePlan = useSelector((state) => state.gamePlan.plan_type)
    const gamePlanPrice = useSelector((state) => state.gamePlan.pricing)
    const planAddOns = useSelector((state) => state.addOn.addon_plan_type)
    const services = planAddOns.filter(item => item.checked === true)
    const plan = billingPlan === "Yearly"? planPricingYearly.find(item => item.planType === gamePlan): planPricingMonthly.find(item => item.planType === gamePlan);

    const finalSum = () =>{
        let sum = 0
        sum = services.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        sum += gamePlanPrice
        return sum;
    }

    const addOn = (type) =>{
        if(billingPlan === 'Yearly'){
            return pricingYearly.find(item => item.planType === type);
        }else{
            return pricingMonthly.find(item => item.planType === type);
        }
    }



    return (
        <div className={'step_form'}>
            <div className={'summary'}>
                <div className={'pi_title'}>
                    <h1 className={'pi_h1'}>Finishing up</h1>
                    <span className={'pi_span'}>Double-check everything looks OK before confirming.</span>
                </div>
                <div className={"plan_option"}>
                    <div className={'summary_box'}>
                        <div className={'summary_product_list'}>

                            <div className={'summary_service_chosen'}>
                                <div className={'change_link'}>
                                    <h4 className={'summary_plan_h4_ch'}>{plan.planType}  {billingPlan === 'Monthly' ? "(Monthly)" : '(Yearly)'} </h4>
                                    <span className={'span_link'} onClick={() => dispatch(incrementByAmount( 1))}>change</span>
                                </div>
                                <span>{plan.price}</span>
                            </div>
                            <hr style={{margin: 0}}/>

                            { services.map((service,idx) =>(
                                <div key={idx} className={'summary_service_chosen'}>
                                    <h4 className={'summary_plan_h4'}>{service.service}</h4>
                                    <span>{addOn(service.service).price}</span>
                                </div>
                            ))}

                        </div>

                        <div className={'summary_product_total'}>
                            <h4 className={'summary_plan_h4'}>Total {billingPlan === 'Monthly' ? "(per month)" : '(per year)'}</h4>
                            <span>+${billingPlan === "Yearly" ? finalSum() + '/yr': finalSum() + '/mo'}</span>

                        </div>
                    </div>
                </div>

                <div className={'pi_button_plan'}>
                    <span onClick={() => dispatch(decrement())}>Go Back</span>
                    <Button variant={"primary"} type={"submit"} onClick={() => dispatch(increment())} >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Summary;