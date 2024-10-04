import './style.css';
import {useState} from "react";
import blindsOpenImg from './../../images/blinds-open.svg'
import blindsClosedImg from './../../images/blinds-closed.svg'

export const Blinds = ({initialState}) => {
    const [state, setState] = useState(initialState)
    function handleOnClick(){
        state === 'open' ? setState('closed') : setState('open')
    }
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={state === 'open' ? blindsOpenImg : blindsClosedImg}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button onClick={handleOnClick} className={state === 'open' ? "button button--active" : "button"}>Otevřeno</button>
                <button onClick={handleOnClick} className={state === 'closed' ? "button button--active" : "button"}>Zavřeno</button>
            </div>
        </div>
    );
};