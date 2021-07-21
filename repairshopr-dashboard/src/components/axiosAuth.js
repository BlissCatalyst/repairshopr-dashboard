import axios from 'axios';

function axiosWithAuth() {
    const token = process.env.REACT_APP_API_TOKEN;
    console.log(token)
    return new axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://microchipsds.repairshopr.com/api/v1',
    })
};

export default axiosWithAuth;