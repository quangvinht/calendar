import { all, takeLatest } from "redux-saga/effects";
import {
  ADD_EVENT_REQUEST,
  DELETE_EVENT_REQUEST,
  GET_EVENTS_REQUEST,
  GET_EVENT_ON_DATE_REQUEST,
} from "../actions/eventAction";
import {
  watchAddEvents,
  watchDeleteEvent,
  watchGetEventOnDate,
  watchGetEvents,
} from "./eventSaga";

const rootSaga = function* () {
  yield all([takeLatest(GET_EVENTS_REQUEST, watchGetEvents)]);
  yield all([takeLatest(ADD_EVENT_REQUEST, watchAddEvents)]);
  yield all([takeLatest(GET_EVENT_ON_DATE_REQUEST, watchGetEventOnDate)]);
  yield all([takeLatest(DELETE_EVENT_REQUEST, watchDeleteEvent)]);
};
export default rootSaga;
