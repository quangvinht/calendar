"use client";

import { Event, EventType } from "@/app/models/event";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteEvents,
  actionGetEventOnDate,
} from "./common/actions/eventAction";
import Calendar from "./components/calendar/calendar";
import DialogAddEvent from "./components/dialog/dialogAddEvent";
import DialogDeleteEvent from "./components/dialog/dialogDeleteEvent";
import { getUpcomingEvents } from "./ultis";
import UpComingEvent from "./components/event/upComingEvent";

export default function Home() {
  const dispatch = useDispatch();
  const events = useSelector((state: any) => state.event.events);
  const eventOnDate = useSelector((state: any) => state.event.eventsOnDate);
  const upcomingEvents = getUpcomingEvents(events);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [idCurrentEvent, setIdCurrentEvent] = useState<number>(0);
  const [newEvent, setNewEvent] = useState<Event>({
    title: "",
    id: 0,
    start: null,
    allDay: false,
    type: EventType.EVENT,
    end: null,
  });

  const handleDateClick = (arg: { date: Date; allDay: boolean }) => {
    const eventsOnDate = events.filter((event: Event) => {
      const eventDate = new Date(event.start as Date).toDateString();
      return eventDate === arg.date.toDateString();
    });

    dispatch(actionGetEventOnDate(eventsOnDate));

    setShowModal(true);
  };

  const handleGetDataFromSelect = (data: any) => {
    setNewEvent({
      ...newEvent,
      id: events.length + 1,
      start: data.start,
      end: data.end,
      allDay: data.allDay,
    });
    setShowModal(true);
  };

  const handleGetIdCurrentEvent = (data: { event: { id: string } }) => {
    setIdCurrentEvent(Number(data.event.id));
    setShowDeleteModal(true);
  };

  const resetEventDateColors = (start: Date, end: Date) => {
    let currentDate = new Date(start);
    while (currentDate <= end) {
      const dateStr = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
      const dayEl = document.querySelector(`.fc-day[data-date="${dateStr}"]`);
      if (dayEl && dayEl instanceof HTMLElement) {
        dayEl.style.backgroundColor = ""; // Reset màu sắc về mặc định
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  };

  const handleDeleteEvent = (id: number) => {
    const eventToDelete = events.find((event: Event) => event.id === id);
    dispatch(actionDeleteEvents(id));
    const startDate = new Date(eventToDelete.start as string);
    const endDate = new Date(eventToDelete.end as string);
    resetEventDateColors(startDate, endDate);

    setShowDeleteModal(false);
  };

  const handleShowModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
    setIdCurrentEvent(0);
  };

  return (
    <main className="flex flex-col p-12 bg-green-100 h-screen overflow-y-scroll">
      <div className="">
        <Calendar
          events={events}
          onDateClick={handleDateClick}
          onEventClick={handleGetIdCurrentEvent}
          onSelect={handleGetDataFromSelect}
        />
      </div>
      <UpComingEvent events={upcomingEvents} />

      <DialogAddEvent
        showState={showModal}
        onClose={setShowModal}
        onCancel={handleShowModal}
        onSetModal={() => {
          setShowModal(false);
        }}
        eventParam={newEvent}
      />
      <DialogDeleteEvent
        showState={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
        }}
        onCancel={handleShowModal}
        onDelete={() => {
          handleDeleteEvent(idCurrentEvent);
        }}
      />
    </main>
  );
}
