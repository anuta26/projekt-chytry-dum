import './style.css';
import {Light} from "../Light";

export const Lights = ({lights}) => {
    return (
        <div className="lights">{lights.map((light) => <Light key={light.name} name={light.name} state={[light.state]}/>)}</div>
    );
};