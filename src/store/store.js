
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/counterSlice.js'; // Ваш корневой срез состояния

const store = configureStore({
  reducer: rootReducer,
  // Другие опции конфигурации, если необходимо
});

export default store;
