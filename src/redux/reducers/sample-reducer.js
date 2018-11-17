import {
    GET_SAMPLE_DATA
} from '../action-constants';

const INITIAL_STATE = {
    sampleData: null
};

export default function boatRampsData(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_SAMPLE_DATA: {
            return { ...state, sampleData: action.data }
        }

        default:
            return state;

    }
}

