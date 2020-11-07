import constants from '../constants/constants';
import axios from "axios"

const saveItem = (item) => axios({
    'method': 'post',
    'url': constants.API_URL + "Item/post",
    'data': item
})
    .then(response => response.data)
    .then(response => {
        return response;
    })
    .catch(err => {
        return false;
    });

const getItems = () => axios({
    'method': 'get',
    'url': constants.API_URL + "Item/getAll",
})
    .then(response => response.data)
    .then(response => {
        return response;
    })
    .catch(err => {
        return false;
    });

const getItem = (id) => axios({
    'method': 'get',
    'url': constants.API_URL + "Item/get" + id,
})
    .then(response => response.data)
    .then(response => {
        return response;
    })
    .catch(err => {
        return false;
    });

    export {
        getItem,
        getItems,
        saveItem
      }
