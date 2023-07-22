import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import quizModal from "./slices/quizModal";

const makeStore = () =>
	configureStore({
		reducer: {
			QuizModal: quizModal,
		},
		devTools: true,
	});

export const wrapper = createWrapper(makeStore);
