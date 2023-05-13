import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../feature/page/pageNumber'
import {SetUserInformation} from "../feature/userInfo/userInformation";

function PersonalInfo() {
    const [infoValidated, setInfoValidated] = useState(false);
    const [name, setName] = useState(useSelector((state) => state.user.name))
    const [email, setEmail] = useState(useSelector((state) => state.user.email))
    const [phoneNumber, setPhoneNumber] = useState(useSelector((state) => state.user.phoneNumber))
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            dispatch(increment())
            dispatch(SetUserInformation({name, email, phoneNumber}))
        }

        setInfoValidated(true);
    };


    return (
        <div className={'step_form'}>
            <Form noValidate validated={infoValidated} onSubmit={handleSubmit} className={'step_form_body'}>
                <div className={'pi_title'}>
                    <h1 className={'pi_h1'}>Personal Info</h1>
                    <span className={'pi_span'}>Please provide your name, email address, and phone number.</span>
                </div>
                <div className={'pi_input'}>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type={"name"} value={name} placeholder={name === ''? "e.g. Stephen King" : name} className={'bg-white'} required/>
                        <Form.Control.Feedback type={"invalid"} className={'m-0 p-0'}>Please provide a valid name.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type={"email"} value={email} placeholder={email === "" ? "e.g. stephenking@lorem.com" : email} className={'bg-white'} required/>
                        <Form.Control.Feedback type={"invalid"}>Please provide a valid Email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} type={"phone"} value={phoneNumber} placeholder={phoneNumber === "" ? "e.g. +1 234 567 890": phoneNumber} className={'bg-white'} required/>
                        <Form.Control.Feedback type={"invalid"}>Please provide a valid Phone Number.</Form.Control.Feedback>
                    </Form.Group>

                </div>
                <div className={'pi_button'}>
                    <Button variant={"primary"} type={'submit'}>
                        Next Step
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default PersonalInfo;