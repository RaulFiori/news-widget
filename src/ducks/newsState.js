const INCREMENT_PAGE = 'app/increment_page';

const initialState = {
  page: 0,
  totalPages: 0,
  selectedSource: null,
  news: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_PAGE:
      return { ...state, page: state.page + 1 };

    default:
      return state;
  }
}

export function incrementPage() {
  return { type: INCREMENT_PAGE };
}
