import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/baseApi';

export const store = configureStore({
  reducer: {
    //кладем в стор данные с апи
    [baseApi.reducerPath]: baseApi.reducer,
  },
  //добавь логику котрая будет делать запросы
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
//весь state приложения
export type RootState = ReturnType<typeof store.getState>;
//тип функции диспатч
export type AppDispatch = typeof store.dispatch;
