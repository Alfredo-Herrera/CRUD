import { combineReducers } from "redux";
import Main from "./main";

const rootReducer = combineReducers({
    main: Main,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
