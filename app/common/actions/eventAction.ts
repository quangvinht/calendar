import { Event } from "@/app/models/event";

export const GET_EVENTS_REQUEST = "GET_EVENTS_REQUEST";
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILED = "GET_EVENTS_FAILED";

export const DELETE_EVENT_REQUEST = "DELETE_EVENT_REQUEST";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILED = "DELETE_EVENT_FAILED";

export const ADD_EVENT_REQUEST = "ADD_EVENT_REQUEST";
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILED = "ADD_EVENT_FAILED";

export const GET_EVENT_ON_DATE_REQUEST = "  GET_EVENT_ON_DATE_REQUEST";
export const GET_EVENT_ON_DATE_SUCCESS = "  GET_EVENT_ON_DATE_SUCCESS";
export const GET_EVENT_ON_DATE_FAILED = " GET_EVENT_ON_DATE_FAILED";

export const actionGetEvents = () => ({
  type: GET_EVENTS_REQUEST,
});
export const getEventsSuccess = (response: Event) => {
  return { type: GET_EVENTS_SUCCESS, payload: { data: response } };
};
export const getEventsFailed = (err: object) => {
  return { type: GET_EVENTS_FAILED, payload: { err } };
};

export const actionAddEvents = (event: Event) => ({
  type: ADD_EVENT_REQUEST,
  payload: event,
});
export const addEventsSuccess = (event: Event) => {
  return { type: ADD_EVENT_SUCCESS, payload: { data: event } };
};
export const addEventsFailed = (err: object) => {
  return { type: ADD_EVENT_FAILED, payload: { err } };
};

export const actionDeleteEvents = (id:number) => ({
  type: DELETE_EVENT_REQUEST,
  payload: id
});
export const deleteEventsSuccess = (id: number) => {
  return { type: DELETE_EVENT_SUCCESS, payload: { data: id } };
};
export const deleteEventsFailed = (err: object) => {
  return { type: DELETE_EVENT_FAILED, payload: { err } };
};

export const actionGetEventOnDate = (events: Event[]) => ({

  type: GET_EVENT_ON_DATE_REQUEST,
  payload: events,
});
export const getEventOnDateSuccess = (events: Event[]) => {
  return { type: GET_EVENT_ON_DATE_SUCCESS, payload: { data: event } };
};
export const getEventOnDateFailed = (err: object) => {
  return { type: GET_EVENT_ON_DATE_FAILED, payload: { err } };
};
