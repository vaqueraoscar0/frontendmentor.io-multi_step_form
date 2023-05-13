import '../App.css';
import {useSelector} from "react-redux";
import {useState} from "react";

function Steps() {
    const progressBar = useSelector((state) => state.page.value)
    const [isMobile, setIsMobile] = useState(false)

    return (
        <div className={'steps'}>
            <div className={'steps-body'}>
                <div className={'stepN'}>
                    <div className={progressBar === 0 ? 'numberStep_selected' : 'numberStep' }>1</div>
                    <div className={'step-body-text'}>
                        <span className={'step-span'}>STEP 1</span>
                        <h2 className={'step-h2'}>YOUR INFO</h2>
                    </div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 1 ? 'numberStep_selected' : 'numberStep' }>2</div>
                    <div className={'step-body-text'}>
                        <span className={'step-span'}>STEP 2</span>
                        <h2 className={'step-h2'}>SELECT PLAN</h2>
                    </div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 2 ? 'numberStep_selected' : 'numberStep' }>3</div>
                    <div className={'step-body-text'}>
                        <span className={'step-span'}>STEP 3</span>
                        <h2 className={'step-h2'}>ADD-ONS</h2>
                    </div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 3 ? 'numberStep_selected' : 'numberStep' }>4</div>
                    <div className={'step-body-text'}>
                        <span className={'step-span'}>STEP 4</span>
                        <h2 className={'step-h2'}>SUMMARY</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Steps;