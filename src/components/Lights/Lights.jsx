import './style.css';
import {Light} from "../Light";

export const Lights = ({lights}) => {
    return (
        <div className="lights">{lights.map((light) => <Light name={light.name} state={[light.state]}/>)}</div>
    );
};