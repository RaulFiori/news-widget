import axios from 'axios';

const API_KEY = '510b44f4a6054ed2a32c3fd8fb1a2910';
const PAGE_SIZE = 5;

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: { 'x-api-key': API_KEY }
});

const formatParams = (page, country, source) => {
  const params = new URLSearchParams();
  params.append('pageSize', PAGE_SIZE);
  params.append('page', page);

  if (source) {
    params.append('sources', source);
  } else if (country) {
    params.append('country', country);
  }

  return params;
};

const getNews = (page, country, source) => {
  const params = formatParams(page, country, source);

  return api
    .get('/top-headlines', {
      params
    })
    .then(({ data }) => data);
};

const getSources = () => {
  return api.get('/sources?country=br').then(({ data }) => data);
};

export { getNews, getSources };
