import './style.css';
import {useState} from "react";
import tempImg from './../../images/temp.svg'

export const Climate = ({initialTemperature, humidity}) => {
    const [temperature, setTemperature] = useState(initialTemperature)
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={tempImg}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperature}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={() => {setTemperature(temperature + 1)}}>+</button>
                <button className="button" onClick={() => {setTemperature(temperature - 1)}}>-</button>
            </div>
        </div>
    );
};