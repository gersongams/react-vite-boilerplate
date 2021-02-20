import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../App';

interface AppState {
  value: number
}

const initialState: AppState = {
  value: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default appSlice.reducer;
