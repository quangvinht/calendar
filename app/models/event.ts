export enum EventType {
  APPOINTMENT = "Appointment",
  EVENT = "Event",
}

export type Event = {
  title: string;
  start: Date | string | null;
  end: Date | string | null;
  allDay: boolean;
  id: number;
  type: EventType;
};
