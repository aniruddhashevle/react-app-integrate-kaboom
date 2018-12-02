import {
    GET_SAMPLE_DATA
} from '../action-constants';
import Axios from 'axios';
import { FAKE_REST_API_URL } from '../../config/constants';

export function getSampleDataforSearch(data) {
    return {
        type: GET_SAMPLE_DATA,
        data
    }
}

export function sampleDataRequestForSearch() {
    return async (dispatch) => {
        try {
            let resp = await Axios({
                method: 'get',
                //fake REST API using json-server : https://github.com/typicode/json-server
                url: `${FAKE_REST_API_URL}/search_data`,
                withCredentials: true
            });
            if (!resp) throw new Error('no response');
            if (resp && resp.data && resp.data.status && resp.data.status.success) {
                const { data = null } = resp.data;
                dispatch(getSampleDataforSearch(data));
            }
            return resp;
        } catch (error) {
            throw error;
        }
    }
}