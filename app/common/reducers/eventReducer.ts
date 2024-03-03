import { Event, EventType } from "@/app/models/event";
import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILED,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILED,
  GET_EVENT_ON_DATE_REQUEST,
  GET_EVENT_ON_DATE_SUCCESS,
  GET_EVENT_ON_DATE_FAILED,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,
} from "../actions/eventAction";

type Action = {
  type: string;
  payload: any;
};

type EventState = {
  events: Event[];
  eventsOnDate: Event[];
};

var today = new Date("12/31/2015");
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
tomorrow.toLocaleDateString();

const initialState: EventState = {
  events: [],
  eventsOnDate: [],
};

export const eventReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return { ...state };
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENTS_FAILED:
      return { ...state };

    case ADD_EVENT_REQUEST:
      return { ...state };
    case ADD_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case ADD_EVENT_FAILED:
      return { ...state };

    case GET_EVENT_ON_DATE_REQUEST:
      return { ...state };
    case GET_EVENT_ON_DATE_SUCCESS:
      return {
        ...state,
        eventsOnDate: action.payload,
      };
    case GET_EVENT_ON_DATE_FAILED:
      return { ...state };

    case DELETE_EVENT_REQUEST:
      return { ...state };
    case DELETE_EVENT_SUCCESS:
      const eventsAfterDelete = state.events.filter(
        (event: Event) => event.id !== action.payload
      );
      return {
        ...state,
        events: eventsAfterDelete,
        eventsOnDate: eventsAfterDelete,
      };
    case DELETE_EVENT_FAILED:
      return { ...state };
    default:
      return state;
  }
};
export default eventReducer;
