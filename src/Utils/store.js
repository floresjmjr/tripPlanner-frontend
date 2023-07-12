import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialState = { signedIn: false };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      state.signedIn = true;
    },
    logOut(state, action) {
      state.signedIn = false;
    },
  },
});

const store = configureStore({
  reducer: { authentication: authenticationSlice.reducer },
});

export const authenticationSliceActions = authenticationSlice.actions;
export default store;
