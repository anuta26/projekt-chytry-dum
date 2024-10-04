import './style.css';
import {Lights} from "../Lights/Lights";
import {Climate} from "../Climate";
import {Blinds} from "../Blinds";
import {Energy} from "../Energy";

export const Dashboard = ({data}) => {
    const {lights, climate, blinds, energyConsumption} = data;
    return (
        <>
            <main className="dashboard">
                <Lights lights={lights} />
                <Climate initialTemperature={climate.temperature} humidity={climate.humidity} />
                <Blinds initialState={blinds} />
                <Energy electricity={energyConsumption.electricity} water={energyConsumption.water}/>
            </main>
        </>
    );
};