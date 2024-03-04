"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootSaga from "./common/sagas/saga";
import { Provider } from "react-redux";
import rootReducer from "./common/reducers/reducers";

const inter = Inter({ subsets: ["latin"] });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware as any) as any
);

sagaMiddleware.run(rootSaga);



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
