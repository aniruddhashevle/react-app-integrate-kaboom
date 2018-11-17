import {
    GET_SAMPLE_DATA
} from '../action-constants';
// import Axios from 'axios';

export function getSampleData(data) {
    return {
        type: GET_SAMPLE_DATA,
        data
    }
}

export function sampleDataRequest() {
    return async (dispatch) => {
        try {
            // let resp = await Axios({
            //     method: 'get',
            //     //fake REST API using json-server : https://github.com/typicode/json-server
            //     url: `http://localhost:3030/boat_ramps`,
            //     withCredentials: true
            // });
            // if (!resp) throw new Error('no response');
            // if (resp && resp.data && resp.data.status && resp.data.status.success) {
            //     const { data = null } = resp.data;
            dispatch(getSampleData('test sample data'));
            // }
            // return resp;
        } catch (error) {
            throw error;
        }
    }
}