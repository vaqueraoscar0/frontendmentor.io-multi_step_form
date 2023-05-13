import '../App.css';
import Steps from "./Steps";
import PersonalInfo from "./Personal_Info";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import SubmitionConfirmation from "./SubmitionConfirmation";

import { useSelector } from 'react-redux'


function Form() {
    const progressBar = useSelector((state) => state.page.value)

    const project = () => {
        switch(progressBar) {

            case 0:   return <PersonalInfo />;
            case 1:   return <SelectPlan />;
            case 2:   return <AddOns />;
            case 3:   return <Summary/>;
            case 4: return <SubmitionConfirmation/>;

            default:      return <h1>No project match</h1>
        }
    }

    return (
        <div className={'form'}>
            <div className={'form-body'}>
                <div className={'form-steps'}>
                    <Steps/>
                </div>
                <div className={'form-content'}>
                    <div className={'content addon_content'}>
                        {project()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;