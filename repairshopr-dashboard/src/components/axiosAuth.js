import axios from 'axios';

function axiosWithAuth() {
    const token = process.env.REACT_APP_API_TOKEN;

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://microchipsds.repairshopr.com/api/v1',
    });
};

export default axiosWithAuth;