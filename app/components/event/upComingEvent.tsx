import React, { useState } from "react";

import { Event, EventType } from "@/app/models/event";
import useWindowSize from "@/app/hooks/useResize";
import { formatTime, getFormatCurrentDate } from "@/app/ultis";
import { CheckIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import EventItem from "./eventItem";

type Props = {
  events: Event[];
};

function UpComingEvent({ events }: Props) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const { width } = useWindowSize();
  const isMobile = width < 768;
  const displayedEvents = showAll ? events : events.slice(0, 3);
  const todayFormatted = getFormatCurrentDate();

  return (
    isMobile &&
    events.length > 0 && (
      <div className="flex border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-white text-black">
        <div className=" flex-1">
          <div className="flex justify-between px-5 items-center">
            <h1 className="font-bold text-xl text-center text-dark-blue">
              <div className="flex flex-col items-start">
                <span> Up coming Events</span>
                <span className="text-gray-400 font-normal">
                  {todayFormatted}
                </span>
              </div>
            </h1>
            {events.length > 3 && (
              <button
                onClick={() => {
                  setShowAll(!showAll);
                }}
                className="font-light text-md text-center bg-light-blue px-2 py-1 rounded-lg text-white"
              >
                Show {!showAll ? "all" : "less"}
              </button>
            )}
          </div>

          {displayedEvents.map((event: Event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>
    )
  );
}

export default UpComingEvent;
