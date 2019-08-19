const INCREMENT_PAGE = 'app/news/increment_page';
const SET_NEWS = 'app/news/set_news';
const SET_SOURCES = 'app/news/set_sources';
const ADD_NEWS = 'app/news/add_news';
const UPDATE_TOTAL = 'app/news/update_total';
const SELECT_SOURCE = 'app/news/select_source';

const PAGE_SIZE = 5;

const initialState = {
  page: 1,
  totalPages: 0,
  country: 'br',
  selectedSource: null,
  news: [],
  sources: []
};

const copyArray = array => array.slice(0);

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_PAGE:
      return { ...state, page: state.page + 1 };
    case SET_NEWS:
      return { ...state, news: copyArray(action.news) };
    case SET_SOURCES:
      return { ...state, sources: copyArray(action.sources) };
    case SELECT_SOURCE:
      return { ...state, selectedSource: action.sourceId, page: 1, news: [] };
    case ADD_NEWS:
      return {
        ...state,
        news: state.news.concat(copyArray(action.news))
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        totalPages: Math.ceil(action.totalResults / PAGE_SIZE)
      };

    default:
      return state;
  }
}

export function incrementPage() {
  return { type: INCREMENT_PAGE };
}

export function updateTotal(totalResults) {
  return { type: UPDATE_TOTAL, totalResults };
}

export function setNews(news) {
  return { type: SET_NEWS, news };
}

export function setSources(sources) {
  return { type: SET_SOURCES, sources };
}

export function selectSource(sourceId) {
  return { type: SELECT_SOURCE, sourceId };
}

export function addNews(news) {
  return { type: ADD_NEWS, news };
}
