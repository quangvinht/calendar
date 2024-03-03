import moment from "moment";
import { Event, EventType } from "@/app/models/event";

export function formatTime(date: any) {
  const momentDate = moment(date);

  const formattedDateTime = momentDate.format("Do MMM YY");

  return formattedDateTime;
}

export function getUpcomingEvents(events: Event[]) {
  const now = new Date();
  return events
    .filter((event) => {
      const startDate = new Date(event.start as Date);
      return startDate >= now;
    })
    .sort((a, b) => {
      const startA = new Date(a.start as Date).getTime();
      const startB = new Date(b.start as Date).getTime();
      return startA - startB;
    });
}

export function getFormatCurrentDate() {
  const currentDate = new Date();
  const isToday = moment(currentDate).isSame(new Date(), "day");
  const formattedDate = isToday
    ? `Today, ${moment(currentDate).format("D MMM")}`
    : moment(currentDate).format("dddd, D MMM");

  return formattedDate;
}
