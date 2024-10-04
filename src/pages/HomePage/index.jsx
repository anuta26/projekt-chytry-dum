import './style.css';
import {Header} from "../../components/Header";
import smartHomeData from "./../../smartHomeData.js";
import {Dashboard} from "../../components/Dashboard";


export const HomePage = () => {
    return (
        <div className="container">
            <Header title="Chytrý dům"/>
            <Dashboard data={smartHomeData}/>
        </div>
    );
};
