import useWindowSize from "@/app/hooks/useResize";
import { Event, EventType } from "@/app/models/event";
import { formatTime } from "@/app/ultis";
import React from "react";
import { start } from "repl";
import EventItem from "../event/eventItem";

interface TooltipProps {
  content: Event | null | undefined;
  show: boolean;
  x: number;
  y: number;
}

function Tooltip({ content, show, x, y }: TooltipProps) {
  if (!show || !content) return null;
  const { width } = useWindowSize();

  const isMobile = width < 768;
  const event: Event = {
    title: content.title,
    start: content.start,
    end: content.end,
    id: content.id,
    allDay: content.allDay,
    type: content.type,
  };

  return (
    !isMobile && (
      <div
        className={`absolute z-10 max-w-72 overflow-hidden h-fit border  shadow-md flex rounded-md bg-white`}
        style={{ top: `${y + 10}px`, left: `${x}px` }}
      >
        <EventItem event={event} />
      </div>
    )
  );
}

export default Tooltip;
