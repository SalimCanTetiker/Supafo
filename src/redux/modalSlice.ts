import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalVisible: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.modalVisible = !state.modalVisible;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
