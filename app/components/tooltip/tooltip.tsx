import useWindowSize from "@/app/hooks/useResize";
import { Event, EventType } from "@/app/models/event";
import { formatTime } from "@/app/ultis";
import React from "react";

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
  console.log(content.title);

  return (
    !isMobile && (
      <div
        className={`absolute z-10 max-w-72 overflow-hidden h-fit border border-gray-200 shadow-md flex rounded-md bg-white`}
        style={{ top: `${y + 10}px`, left: `${x}px` }}
      >
        <div className={`w-2 bg-dark-blue`}></div>
        <div className={`ml-3 flex-1 flex flex-col px-3 py-1 break-all`}>
          <h2 className="font-bold text-xl text-light-blue">{content.title}</h2>
          <div className="text-sm">
            <b> Start</b>:{" "}
            <span className="text-gray-500">{formatTime(content.start)}</span>
          </div>
          <div className="text-sm">
            <b>End</b>:{" "}
            <span className="text-gray-500">{formatTime(content.end)}</span>
          </div>
          <div className="text-sm">
            <b>Type</b>: <span className="text-gray-500">{content.type}</span>
          </div>
        </div>
      </div>
    )
  );
}

export default Tooltip;
