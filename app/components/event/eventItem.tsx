import { EventType, Event } from "@/app/models/event";
import { formatTime } from "@/app/ultis";
import VideoCameraIcon from "@heroicons/react/20/solid/VideoCameraIcon";

import React from "react";

type Props = {
  event: Event;
};

function EventItem({ event }: Props) {
  const imgUrl =
    "data:image/jpeg;base64,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";
  return (
    <div
      className={`  flex fc-event border-2 overflow-hidden   w-full rounded-md ml-auto  
       ${
         event.type === EventType.APPOINTMENT
           ? "bg-light-orange"
           : "bg-dark-orange"
       }
        ${event.type === EventType.APPOINTMENT && "bg-light-orange"}
        ${event.type === EventType.EVENT && "bg-dark-orange"}
        ${event.type === EventType.OTHER && "bg-light-blue"}
        
        `}
    >
      <div
        className={`w-2  
          ${event.type === EventType.APPOINTMENT && "bg-dark-blue"}
          ${event.type === EventType.EVENT && "bg-light-blue"}
          ${event.type === EventType.OTHER && "bg-orange-600"}

          
          
          `}
      ></div>
      <div className="flex flex-col flex-1 p-3 gap-3">
        <div className="flex justify-between  items-center">
          <div>
            <div
              className={`text-dark-blue     ${
                event.type === EventType.OTHER && "text-white"
              }  font-bold text-xl`}
            >
              {event.title}
            </div>
            <div className=" flex flex-col gap-2">
              <div className="text-sm">
                <b> Start</b>:{" "}
                <span className="text-gray-500">{formatTime(event.start)}</span>
              </div>
              <div className="text-sm">
                <b>End</b>:{" "}
                <span className="text-gray-500">{formatTime(event.end)}</span>
              </div>
            </div>
          </div>
          <div>
            {event.type !== EventType.EVENT && (
              <VideoCameraIcon
                className={`h-8 w-8  ${
                  event.type === EventType.APPOINTMENT && "text-white"
                }    
                ${
                  event.type === EventType.OTHER && "text-dark-blue"
                }  rounded-full  p-1     ${
                  event.type === EventType.OTHER && "bg-white"
                } ${
                  event.type === EventType.APPOINTMENT && "bg-light-blue"
                }    `}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {event.type !== EventType.EVENT && (
          <div className=" flex items-center ">
            <img
              src={imgUrl}
              className="object-cover object-center rounded-full w-8 h-8"
            />
            <a href="#" className="ml-2 text-gray-500 underline">
              {" "}
              View Client Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventItem;
