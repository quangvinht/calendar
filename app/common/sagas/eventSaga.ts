import { call, put } from "redux-saga/effects";

import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILED,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILED,
  GET_EVENT_ON_DATE_SUCCESS,
  GET_EVENT_ON_DATE_FAILED,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,
} from "../actions/eventAction";

function* handleGetEvents() {
  try {
  } catch (err) {}
}
function* handleAddEvents(event: Event) {
  try {
    yield put({
      type: ADD_EVENT_SUCCESS,
      payload: event,
    });
  } catch (err) {
    yield put({ type: ADD_EVENT_FAILED, err });
  }
}



function* handleGetEventOnDate(events: Event[]) {
  try {
    yield put({
      type: GET_EVENT_ON_DATE_SUCCESS,
      payload: events,
    });
  } catch (err) {
    yield put({ type: GET_EVENT_ON_DATE_FAILED, err });
  }
}


function* handleDeleteEvent(id: Event) {
  try {
    yield put({
      type: DELETE_EVENT_SUCCESS,
      payload: id,
    });
  } catch (err) {
    yield put({ type: DELETE_EVENT_FAILED, err });
  }
}

export function* watchGetEvents() {
  yield call(handleGetEvents);
}

export function* watchAddEvents(payload: any) {
  yield call(handleAddEvents, payload.payload);
}


export function* watchGetEventOnDate(payload: any) {
  yield call(handleGetEventOnDate, payload.payload);
}

export function* watchDeleteEvent(payload: any) {
  yield call(handleDeleteEvent, payload.payload);
}

