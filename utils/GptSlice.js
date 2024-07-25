import { createSlice } from "@reduxjs/toolkit";

const GptSearch = createSlice({
    name : "gpt",
    initialState : {
        GptSearchNow : false
    },
    reducers : {
        toggleGptSearchView : (state) => {
            // toggle feature if state.GptSearchNow is false then it true and it true then it make false
            state.GptSearchNow = !state.GptSearchNow
        }
    }

})

export const {toggleGptSearchView} = GptSearch.actions
export default GptSearch.reducer