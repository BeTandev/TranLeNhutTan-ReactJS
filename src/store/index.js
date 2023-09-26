import { configureStore } from '@reduxjs/toolkit'
import showSlideBarReducer from './showSlideBarReducer';

export const store = configureStore({
    reducer: {
      SHOWSLIDEBAR: showSlideBarReducer
    }
  });