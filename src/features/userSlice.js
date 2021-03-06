import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value:null,
  
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }, 
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
},
  });

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const selectUser=(state)=>state.user.user


export default userSlice.reducer;
