import { SHOW_SLIDE_BAR } from "./showSlideBaraction";

const initialState = {
  params: {},
};

const showSlideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SLIDE_BAR:
      return {
        ...state,
        params: action.payload,
      };
    default:
      return state;
  }
};

export default showSlideBarReducer;