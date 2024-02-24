import { create } from 'apisauce'

// define the api
const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=a300939dfb7c4ba095518de130b2d751';

// start making calls
const getTopHeadLine = api.get('/top-headlines' + apiKey);

const getByCategory = (category) => api.get('/everything?q=' + category + "&apiKey=a300939dfb7c4ba095518de130b2d751");

export default {
    getTopHeadLine,
    getByCategory
}