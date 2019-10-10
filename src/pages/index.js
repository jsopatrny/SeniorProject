import React from "react";
import ReactDOM from "react-dom";
import Homepage from "../components/homepage";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const MainPage = () => {
        return(
            <div>
                <Link to="/table">Table</Link>
                <Homepage />
            </div>
        )
    
}

export default MainPage