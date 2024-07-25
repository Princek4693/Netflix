import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import GptSlice from "./GptSlice";
import configReducer from './configSlice'


const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : moviesSlice,
            gpt : GptSlice,
            config : configReducer
        }
    }
)

export default appStore;
