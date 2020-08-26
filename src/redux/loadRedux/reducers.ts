import {
  LoadState,
  LoadActionTypes,
  LOAD_ACTIVE,
  LOAD_COMPLETE,
} from '../types';

const initialState: LoadState = { loading: false };

const loadReducer = (
  state = initialState,
  action: LoadActionTypes
): LoadState => {
  switch (action.type) {
    case LOAD_ACTIVE: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_COMPLETE: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default loadReducer;
