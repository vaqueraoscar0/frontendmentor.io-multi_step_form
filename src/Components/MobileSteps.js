import '../App.css';
import {useSelector} from "react-redux";

function MobileSteps() {
    const progressBar = useSelector((state) => state.page.value)

    return (
        <div className={'mobile_steps'}>
            <div className={'mobile_steps-body'}>
                <div className={'stepN'}>
                    <div className={progressBar === 0 ? 'numberStep_selected' : 'numberStep' }>1</div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 1 ? 'numberStep_selected' : 'numberStep' }>2</div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 2 ? 'numberStep_selected' : 'numberStep' }>3</div>
                </div>
                <div className={'stepN'}>
                    <div className={progressBar === 3 ? 'numberStep_selected' : 'numberStep' }>4</div>
                </div>
            </div>
        </div>

    );
}

export default MobileSteps;