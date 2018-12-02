import Axios from 'axios';
import {
    GET_HISTORICAL_DATA
} from '../action-constants';
import { API_ROOT_URL } from '../../config/constants';

export function getHistoricalData(data) {
    return {
        type: GET_HISTORICAL_DATA,
        data
    }
}

export function historicalDataRequest(interval = 0) {
    return async (dispatch) => {
        try {
            let resp = await Axios({
                method: 'get',
                url: `${API_ROOT_URL}/api/historical`,
                params: { interval }
            });
            if (!resp) throw new Error('no response');
            if (resp && resp.status === 200 && resp.data && resp.data.length > 0) {
                dispatch(getHistoricalData(resp.data));
                return resp.data;
            } else return null;
        } catch (error) {
            throw error;
        }
    }
}