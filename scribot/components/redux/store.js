import { configureStore } from '@reduxjs/toolkit';
import data from "./slices/user"


const store = configureStore({
    reducer: {
        data
    }, // Add your reducers here
  });
  export default store;