import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	open: false,
};

export const counterSlice = createSlice({
	name: "QuizModal",
	initialState,
	reducers: {
		OpenModal: (state, action) => {
			state.open = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { OpenModal } = counterSlice.actions;

export default counterSlice.reducer;
