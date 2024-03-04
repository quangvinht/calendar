import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { StyleWrapper } from "./calendarStyle";
import useWindowSize from "@/app/hooks/useResize";
import { useEffect, useMemo, useRef, useState } from "react";
import { Event, EventType } from "@/app/models/event";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import Tooltip from "../tooltip/tooltip";

type Props = {
  events: Event[];
  onDateClick: Function;
  onDrop?: Function;
  onEventClick: Function;
  onSelect: Function;
};

function Calendar({ events, onDateClick, onEventClick, onSelect }: Props) {
  const [tooltipInfo, setTooltipInfo] = useState({
    content: {
      title: "",
      id: 0,
      start: null,
      allDay: false,
      type: EventType.EVENT,
      end: null,
    },
    show: false,
    x: 0,
    y: 0,
  });

  const handleEventMouseEnter = (mouseEnterInfo: any) => {
    const { pageX, pageY } = mouseEnterInfo.jsEvent;

    const findEvent = events.find(
      (event: Event) => event.id === Number(mouseEnterInfo.event.id)
    );

    setTooltipInfo({
      content: {
        ...mouseEnterInfo.event,
        type: findEvent?.type,
        title: findEvent?.title,
      },
      show: true,
      x: pageX,
      y: pageY,
    });
  };

  const handleEventMouseLeave = () => {
    setTooltipInfo((prev) => ({ ...prev, show: false }));
  };

  const calendarRef = useRef<FullCalendar>(null);
  const { width } = useWindowSize();

  const isMobile = width < 768;
  const headerToolbar = isMobile
    ? {
        start: "",
        center: "prev title next",
        end: "",
      }
    : {
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      };

  useEffect(() => {
    if (calendarRef.current) {
      let calendarApi = calendarRef.current.getApi();
      calendarApi.updateSize();
    }
  }, [width]);

  return (
    <div className="bg-white text-black">
      <StyleWrapper>
        
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={headerToolbar}
          initialView="dayGridMonth"
          events={events as EventSourceInput}
          nowIndicator={true}
          eventDisplay={isMobile ? "background" : "block"}
          //editable={true}
          //droppable={true}
          selectable={true}
          selectMirror={true}
          dateClick={(data) => {
            !isMobile && onDateClick(data);
          }}
          drop={(data) => {
           
          }}
          eventClick={(data) => {
            onEventClick(data);
          }}
          select={(data) => {
            onSelect(data);
          }}
          //hover event :
          eventMouseEnter={handleEventMouseEnter}
          eventMouseLeave={handleEventMouseLeave}
          eventDidMount={({ isMirror, isStart, isEnd, event, el }) => {
            let startDate = event.start ? new Date(event.start) : new Date();

            let endDate = event.end ? new Date(event.end) : new Date(startDate);

            if (endDate < startDate) {
              endDate = new Date(startDate);
            }

            startDate = new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate()
            );
            endDate = new Date(
              endDate.getFullYear(),
              endDate.getMonth(),
              endDate.getDate()
            );
            let today = new Date();

            today = new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            );

            let currentDate = new Date(startDate);
            while (currentDate < endDate) {
              const dateStr = `${currentDate.getFullYear()}-${String(
                currentDate.getMonth() + 1
              ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
                2,
                "0"
              )}`;
              const dayEl = document.querySelector(
                `.fc-day[data-date="${dateStr}"]`
              );

              const currentEl = document.querySelector(
                `.fc-day-today .fc-daygrid-day-frame`
              );
              if (dayEl && dayEl instanceof HTMLElement) {
                dayEl.style.backgroundColor = "#c9ffcf";
              }
              if (today >= currentDate && today <= endDate) {
                if (currentEl && currentEl instanceof HTMLElement) {
                  currentEl.style.backgroundColor = "#c9ffcf";
                }
              }

              currentDate.setDate(currentDate.getDate() + 1);
            }
          }}
        />
      </StyleWrapper>
      <Tooltip
        content={tooltipInfo.content}
        show={tooltipInfo.show}
        x={tooltipInfo.x}
        y={tooltipInfo.y}
      />
    </div>
  );
}

export default Calendar;
