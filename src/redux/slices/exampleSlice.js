import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0 ,
}
const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {

    }
});
// export {reducers} = exampleSlice.actions
export default exampleSlice.reducer;