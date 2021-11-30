import { SOIL_MOISTURE_FETCH_FAILURE,SOIL_MOISTURE_FETCH_REQUEST, SOIL_MOISTURE_FETCH_SUCCESS } from "./soilMoistureFetchTypes";

const initialState ={
    loading: false,
    soilMoisture: {},
    error: ''
}

const soilMoistureFetchReducer=(state = initialState, action)=>{
    switch(action.type)
    {
        case SOIL_MOISTURE_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SOIL_MOISTURE_FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                soilMoisture: action.payload,
                error:''
            }

        case SOIL_MOISTURE_FETCH_FAILURE:
            return{
                ...state,
                loading:false,
                soilMoisture: {},
                error:action.payload
            }

        default: return state
    }
}

export default soilMoistureFetchReducer

