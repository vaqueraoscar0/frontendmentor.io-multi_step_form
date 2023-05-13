import '../App.css';
import imgSuccess from '../assets/images/icon-thank-you.svg'

function SubmitionConfirmation() {
    return (
        <div className={'submition_body'}>
            <div className={'submition_feedback'}>
                <img src={imgSuccess}/>
                <h1 className={'submition_feedback_h1'}>Thank You!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform.
                    If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    );
}

export default SubmitionConfirmation;