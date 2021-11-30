import axios from "axios";
import { SOIL_MOISTURE_FETCH_FAILURE,SOIL_MOISTURE_FETCH_REQUEST, SOIL_MOISTURE_FETCH_SUCCESS } from "./soilMoistureFetchTypes";

const soilMoistureFetchRequest=()=>{
    return {
        type: SOIL_MOISTURE_FETCH_REQUEST
    }
}

const soilMoistureFetchSuccess=(soilmos)=>{
    return {
        type: SOIL_MOISTURE_FETCH_SUCCESS,
        payload: soilmos
    }
}

const soilMoistureFetchFailure=(error)=>{
    return {
        type: SOIL_MOISTURE_FETCH_FAILURE,
        payload: error
    }
}

export const soilMoistureFetch=()=>{
    return (dispatch)=>{
        dispatch(soilMoistureFetchRequest);
        axios.get('')
    }
}