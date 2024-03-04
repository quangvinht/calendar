import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import { Event, EventType } from "@/app/models/event";
import { actionAddEvents } from "@/app/common/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  showState: boolean;
  onClose: Function; 
  onCancel: Function; 

  onSetModal: Function;

  eventParam: Event;
};
export default function DialogAddEvent({
  showState,
  onClose,
  onCancel,
  onSetModal,

  eventParam,
}: Props) {
  const dispatch = useDispatch();

  const [newEvent, setNewEvent] = useState<Event>(eventParam);

  useEffect(() => {
    setNewEvent(eventParam);
  }, [eventParam]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionAddEvents(newEvent));

    onSetModal();

    setNewEvent({
      title: "",
      id: 0,
      start: null,
      allDay: false,
      type: EventType.EVENT,
      end: null,
    });
  };

  return (
    <Transition.Root show={showState} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        onClose={() => {
          onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-96  md:min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Add Event
                    </Dialog.Title>
                    <form
                      action="submit"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      {/* input for title */}
                      <div className="mt-2">
                        <input
                          type="text"
                          name="title"
                          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 
                        shadow-sm ring-1 ring-inset ring-light-orange placeholder:text-gray-400 
                        focus:ring-2 focus:ring-inset focus:ring-dark-orange
                        sm:text-sm sm:leading-6"
                          value={newEvent.title}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              title: e.target.value,
                            })
                          }
                          placeholder="Title"
                        />
                      </div>
                      {/* drop down for type */}
                      <div className="mt-2">
                        <select
                          name="eventType"
                          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 
                 shadow-sm ring-1 ring-inset ring-light-orange placeholder:text-gray-400 
                 focus:ring-2 focus:ring-inset focus:ring-dark-orange
                 sm:text-sm sm:leading-6"
                          value={newEvent.type}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              type: e.target.value as EventType,
                            })
                          }
                        >
                          {Object.values(EventType).map((type) => (
                            <option key={type} value={type}>
                              {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                          disabled={newEvent.title === ""}
                        >
                          Create
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                          onClick={() => {
                            onCancel();
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
