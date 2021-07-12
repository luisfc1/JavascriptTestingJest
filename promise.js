import axios from "axios";

export const getdataFromApi = (url) => {
    return axios.get(url)
        .then(({ data }) => {
            return data;
        });
};