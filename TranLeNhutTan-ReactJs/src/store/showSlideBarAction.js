export const SHOW_SLIDE_BAR = "SHOW_SLIDE_BAR";

export const showSlideBar = (payload) => {
  return {
    type: SHOW_SLIDE_BAR,
    payload: payload,
  };
};