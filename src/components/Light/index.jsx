import './style.css';
import lightOffImg from './../../images/light-off.svg'
import lightOnImg from './../../images/light-on.svg'
import {useState} from "react";

export const Light = ({name, initialState}) => {
    const [state, setState] = useState(initialState);
    function handleOnClick() {
        state === 'on' ? setState('off') : setState('on')
    }
    return (
        <div className="light" onClick={handleOnClick}>
            <div className="light__icon">
                <img src={state === 'on' ? lightOnImg : lightOffImg}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    );
};