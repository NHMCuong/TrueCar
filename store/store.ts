import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

export const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
