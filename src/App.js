import React, { Suspense } from 'react';
// import { RouterProvider } from 'react-router-dom';
import AppRoutes from "./components/home/AppRoutes";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/root-reducer';
import "./App.css"
import './utils/i18n.js';
// import "./style.default.css"
const store = createStore(RootReducer);
const App = () => {
  // return <RouterProvider router={AppRoutes} />;
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Suspense>
    </>
  );
};

export default App;