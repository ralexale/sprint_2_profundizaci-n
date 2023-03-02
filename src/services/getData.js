import axios from 'axios';

const ULR_API = 'http://localhost:4000/flights';

export const getData = async () => {
    try {
        const { data } = await axios.get(`${ULR_API}`);
        return data;
    } catch (error) {
        return error;
    }
};
