import {
    GET_HISTORICAL_DATA
} from '../action-constants';

const INITIAL_STATE = {
    historicalData: null
};

export default function setKaboomData(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_HISTORICAL_DATA: {
            return { ...state, historicalData: action.data }
        }

        default: return state;

    }
}